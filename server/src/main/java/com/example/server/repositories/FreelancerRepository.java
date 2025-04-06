package com.yourcompany.server.repositories;

import com.yourcompany.server.models.Freelancer;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Optional;

public interface FreelancerRepository extends MongoRepository<Freelancer, String> {
    Optional<Freelancer> findByEmail(String email);
    List<Freelancer> findByIndustry(String industry);
}
