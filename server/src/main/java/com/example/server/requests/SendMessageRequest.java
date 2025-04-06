package com.example.server.requests;

import jakarta.validation.constraints.NotNull;

public class SendMessageRequest {

    @NotNull
    private String userId;

    @NotNull
    private String offerId;

    @NotNull
    private String message;

    // No-args constructor
    public SendMessageRequest() {}

    // Getters and setters
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getOfferId() {
        return offerId;
    }
    public void setOfferId(String offerId) {
        this.offerId = offerId;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
}
