package com.example.server.services;

import com.example.server.models.Client;
import com.example.server.models.Freelancer;
import com.example.server.repositories.ClientRepository;
import com.example.server.repositories.FreelancerRepository;
import com.example.server.requests.LoginRequest;
import com.example.server.responses.UserResponse;
import com.example.server.utils.JwtUtil;
import com.example.server.utils.TokenBlacklist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private FreelancerRepository freelancerRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private TokenBlacklist tokenBlacklist;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserResponse login(LoginRequest request) {
        Optional<Freelancer> freelancerOpt = freelancerRepository.findByEmail(request.getEmail());
        Optional<Client> clientOpt = clientRepository.findByEmail(request.getEmail());

        if (!freelancerOpt.isPresent() && !clientOpt.isPresent()) {
            throw new RuntimeException("Email or password doesn't match");
        }

        boolean isValid = false;
        if (freelancerOpt.isPresent()) {
            Freelancer freelancer = freelancerOpt.get();
            isValid = passwordEncoder.matches(request.getPassword(), freelancer.getPassword());
            if (!isValid) {
                throw new RuntimeException("Email or password doesn't match");
            }
            String token = jwtUtil.generateFreelancerToken(freelancer);
            return new UserResponse(freelancer.getId(), token, freelancer.getName(), freelancer.getEmail(), freelancer.getTitle());
        } else {
            Client client = clientOpt.get();
            isValid = passwordEncoder.matches(request.getPassword(), client.getPassword());
            if (!isValid) {
                throw new RuntimeException("Email or password doesn't match");
            }
            String token = jwtUtil.generateClientToken(client);
            return new UserResponse(client.getId(), token, client.getName(), client.getEmail(), client.getIndustry());
        }
    }

    public void logout(String token) {
        tokenBlacklist.invalidate(token);
    }

    public String addDescription(String id, String description) {
        Optional<Freelancer> freelancerOpt = freelancerRepository.findById(id);
        if (freelancerOpt.isPresent()) {
            Freelancer freelancer = freelancerOpt.get();
            freelancer.setDescription(description);
            freelancerRepository.save(freelancer);
            return "Description added for freelancer.";
        }
        Optional<Client> clientOpt = clientRepository.findById(id);
        if (clientOpt.isPresent()) {
            Client client = clientOpt.get();
            client.setDescription(description);
            clientRepository.save(client);
            return "Description added for client.";
        }
        throw new RuntimeException("User not found.");
    }

    public Object getUserProfile(String id) {
        Optional<Freelancer> freelancerOpt = freelancerRepository.findById(id);
        if (freelancerOpt.isPresent()) {
            Freelancer freelancer = freelancerOpt.get();
            freelancer.setPassword(null);
            return freelancer;
        }
        Optional<Client> clientOpt = clientRepository.findById(id);
        if (clientOpt.isPresent()) {
            Client client = clientOpt.get();
            client.setPassword(null);
            return client;
        }
        throw new RuntimeException("User not found.");
    }
}
