package com.example.server.models.requests;

import com.example.server.models.offers.FreelancerOffer;
import jakarta.validation.constraints.NotNull;

public class FreelancerOfferCreationRequest {

    @NotNull
    private String id;  // Freelancer ID

    @NotNull
    private FreelancerOffer data;  // Freelancer offer data

    public FreelancerOfferCreationRequest() {}

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public FreelancerOffer getData() {
        return data;
    }
    public void setData(FreelancerOffer data) {
        this.data = data;
    }
}
