package com.example.server.services;

import com.example.server.models.Freelancer;
import com.example.server.models.dtos.FreelancerDto;
import com.example.server.models.dtos.FreelancerResponseDto;
import com.example.server.repositories.FreelancerRepository;
import com.example.server.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class FreelancerService {

    @Autowired
    private FreelancerRepository freelancerRepository;

    @Autowired
    private JwtUtil jwtUtil;  // From the utils package

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public FreelancerResponseDto register(FreelancerDto dto) {
        // Check if freelancer already exists
        Optional<Freelancer> existing = freelancerRepository.findByEmail(dto.getEmail());
        if (existing.isPresent()) {
            throw new RuntimeException("User already exists");
        }

        // Create a new Freelancer entity (ignore confirmPassword)
        Freelancer freelancer = new Freelancer();
        freelancer.setName(dto.getName());
        freelancer.setTitle(dto.getTitle());
        freelancer.setSkills(dto.getSkills());
        freelancer.setHourRate(dto.getHourRate());
        freelancer.setIndustry(dto.getIndustry());
        freelancer.setEmail(dto.getEmail());
        freelancer.setImgUrl(dto.getImgUrl());
        // Hash the password before saving
        freelancer.setPassword(passwordEncoder.encode(dto.getPassword()));

        Freelancer savedFreelancer = freelancerRepository.save(freelancer);

        // Generate a JWT token for the new freelancer
        String token = jwtUtil.generateFreelancerToken(savedFreelancer);

        // Prepare and return the response DTO
        FreelancerResponseDto response = new FreelancerResponseDto();
        response.setId(savedFreelancer.getId());
        response.setAccessToken(token);
        response.setName(savedFreelancer.getName());
        response.setEmail(savedFreelancer.getEmail());
        response.setTitle(savedFreelancer.getTitle());

        return response;
    }

    public Freelancer getFreelancerProfile(String id) {
        Optional<Freelancer> freelancerOpt = freelancerRepository.findById(id);
        if (freelancerOpt.isPresent()) {
            Freelancer freelancer = freelancerOpt.get();
            freelancer.setPassword(null);  // Do not expose the password
            return freelancer;
        }
        return null;
    }

    public List<Freelancer> getAll() {
        List<Freelancer> freelancers = freelancerRepository.findAll();
        freelancers.forEach(f -> f.setPassword(null));
        return freelancers;
    }

    public List<Freelancer> getAllCategory(String category) {
        List<Freelancer> freelancers = freelancerRepository.findByIndustry(category);
        freelancers.forEach(f -> f.setPassword(null));
        return freelancers;
    }
}
