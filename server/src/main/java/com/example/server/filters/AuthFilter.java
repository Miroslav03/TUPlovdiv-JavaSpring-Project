package com.yourcompany.server.filters;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.yourcompany.server.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

@Component
public class AuthFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
                                    throws ServletException, IOException {
        String tokenHeader = request.getHeader("x-authorization");
        if (tokenHeader == null) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("{\"error\":\"No token\"}");
            return;
        }
        try {
            ObjectMapper mapper = new ObjectMapper();
            Map<String, String> tokenMap = mapper.readValue(tokenHeader, Map.class);
            String accessToken = tokenMap.get("accessToken");
            jwtUtil.validateToken(accessToken);
            filterChain.doFilter(request, response);
        } catch (Exception ex) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("{\"error\":\"Invalid or expired token\"}");
        }
    }
}
