package com.yourcompany.server.models.requests;

import com.yourcompany.server.models.offers.ClientOffer;
import javax.validation.constraints.NotNull;

public class OfferCreationRequest {

    @NotNull
    private String id; // Client ID

    @NotNull
    private ClientOffer data; // Offer data; you can replace this with a dedicated DTO if needed

    // No-args constructor
    public OfferCreationRequest() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ClientOffer getData() {
        return data;
    }

    public void setData(ClientOffer data) {
        this.data = data;
    }
}
