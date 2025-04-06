package com.example.server.repositories;

import com.example.server.models.offers.FreelancerOffer;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface FreelancerOfferRepository extends MongoRepository<FreelancerOffer, String> {
    List<FreelancerOffer> findByIndustry(String industry);
}
