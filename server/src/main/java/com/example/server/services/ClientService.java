package com.yourcompany.server.services;

import com.yourcompany.server.models.Client;
import com.yourcompany.server.models.dtos.ClientDto;
import com.yourcompany.server.models.dtos.ClientResponseDto;
import com.yourcompany.server.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private JwtUtil jwtUtil;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public ClientResponseDto register(ClientDto dto) {
        Optional<Client> existing = clientRepository.findByEmail(dto.getEmail());
        if (existing.isPresent()) {
            throw new RuntimeException("User already exists");
        }

        // Create a new Client from DTO (ignoring confirmPassword)
        Client client = new Client();
        client.setName(dto.getName());
        client.setIndustry(dto.getIndustry());
        client.setEmail(dto.getEmail());
        client.setImgUrl(dto.getImgUrl());
        client.setPassword(passwordEncoder.encode(dto.getPassword()));
        client.setDescription(dto.getDescription());
        client.setEmployees(dto.getEmployees());

        // Save the client
        Client savedClient = clientRepository.save(client);

        // Generate a JWT token for the new client
        String token = jwtUtil.generateClientToken(savedClient);

        // Prepare response DTO
        ClientResponseDto response = new ClientResponseDto();
        response.setId(savedClient.getId());
        response.setAccessToken(token);
        response.setName(savedClient.getName());
        response.setEmail(savedClient.getEmail());
        response.setIndustry(savedClient.getIndustry());

        return response;
    }

    public Client getClientById(String id) {
        return clientRepository.findById(id).orElse(null);
    }

    public List<Client> getAll() {
        return clientRepository.findAll();
    }

    public List<Client> getAllCategory(String category) {
        return clientRepository.findByIndustry(category);
    }
}
