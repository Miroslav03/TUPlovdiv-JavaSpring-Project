package com.yourcompany.server.requests;

import javax.validation.constraints.NotNull;

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
