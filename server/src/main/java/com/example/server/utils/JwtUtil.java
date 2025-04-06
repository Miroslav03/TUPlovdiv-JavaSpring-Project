package com.example.server.utils;

import com.example.server.models.Client;
import com.example.server.models.Freelancer;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;
import java.util.Date;

@Component
public class JwtUtil {
    private final String SECRET_KEY = "YourSecretKey"; // Ideally load from application.properties
    private final long EXPIRATION_TIME = 86400000; // 1 day in milliseconds

    public String generateFreelancerToken(Freelancer freelancer) {
        return Jwts.builder()
                .setSubject(freelancer.getId())
                .claim("name", freelancer.getName())
                .claim("email", freelancer.getEmail())
                .claim("title", freelancer.getTitle())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

    public String generateClientToken(Client client) {
        return Jwts.builder()
                .setSubject(client.getId())
                .claim("name", client.getName())
                .claim("email", client.getEmail())
                .claim("industry", client.getIndustry())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }
    
    // This method validates the token. If the token is invalid or expired, it throws an exception.
    public void validateToken(String token) {
        Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
    }
}
