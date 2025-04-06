package com.example.server.requests;

import jakarta.validation.constraints.NotNull;

public class DescriptionRequest {
    @NotNull
    private String description;

    public DescriptionRequest() {}

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
}
