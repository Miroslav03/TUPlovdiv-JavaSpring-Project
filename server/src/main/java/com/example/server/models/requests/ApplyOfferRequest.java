package com.yourcompany.server.models.requests;

import javax.validation.constraints.NotNull;

public class ApplyOfferRequest {

    @NotNull
    private String userId;

    @NotNull
    private String offerId;

    // No-args constructor
    public ApplyOfferRequest() {
    }

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
}
