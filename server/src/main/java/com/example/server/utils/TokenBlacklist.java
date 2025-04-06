package com.yourcompany.server.utils;

import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;

@Component
public class TokenBlacklist {
    private List<String> invalidTokens = new ArrayList<>();

    public void invalidate(String token) {
        if (!invalidTokens.contains(token)) {
            invalidTokens.add(token);
        }
    }

    public boolean isInvalidated(String token) {
        return invalidTokens.contains(token);
    }
}
