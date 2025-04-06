package com.example.server.repositories;

import com.example.server.models.Freelancer;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Optional;

public interface FreelancerRepository extends MongoRepository<Freelancer, String> {
    Optional<Freelancer> findByEmail(String email);
    List<Freelancer> findByIndustry(String industry);
}
