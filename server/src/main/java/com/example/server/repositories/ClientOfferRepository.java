package com.example.server.repositories;

import com.example.server.models.offers.ClientOffer;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ClientOfferRepository extends MongoRepository<ClientOffer, String> {
    List<ClientOffer> findByIndustry(String industry);
}
