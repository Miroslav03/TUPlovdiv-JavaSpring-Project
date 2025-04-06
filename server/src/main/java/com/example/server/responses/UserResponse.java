package com.example.server.responses;

public class UserResponse {
    private String id;
    private String accessToken;
    private String name;
    private String email;
    // This field holds freelancer’s title or client’s industry
    private String extra;

    public UserResponse(String id, String accessToken, String name, String email, String extra) {
        this.id = id;
        this.accessToken = accessToken;
        this.name = name;
        this.email = email;
        this.extra = extra;
    }

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getAccessToken() {
        return accessToken;
    }
    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getExtra() {
        return extra;
    }
    public void setExtra(String extra) {
        this.extra = extra;
    }
}
