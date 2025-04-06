package com.example.server.requests;

import jakarta.validation.constraints.NotNull;

public class TokenRequest {
    @NotNull
    private String token;

    public TokenRequest() {}

    public String getToken() {
        return token;
    }
    public void setToken(String token) {
        this.token = token;
    }
}
