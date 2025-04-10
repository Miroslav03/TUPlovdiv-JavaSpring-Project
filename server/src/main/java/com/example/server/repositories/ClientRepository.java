package com.example.server.repositories;

import com.example.server.models.Client;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Optional;

public interface ClientRepository extends MongoRepository<Client, String> {
    Optional<Client> findByEmail(String email);
    List<Client> findByIndustry(String industry);
}
