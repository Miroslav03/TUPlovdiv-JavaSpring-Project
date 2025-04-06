package com.example.server.controllers;

import com.example.server.constants.Paths;
import com.example.server.models.Client;
import com.example.server.models.dtos.ClientDto;
import com.example.server.models.dtos.ClientResponseDto;
import com.example.server.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173") 
@RequestMapping("/auth/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    // POST /auth/client/register
    @PostMapping(Paths.Clients.REGISTER)
    public ResponseEntity<?> register(@RequestBody ClientDto clientDto) {
        try {
            ClientResponseDto response = clientService.register(clientDto);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // GET /auth/client/profile/{id}
    @GetMapping(Paths.Clients.GET_ONE)
    public ResponseEntity<?> getClientProfile(@PathVariable("id") String id) {
        try {
            Client client = clientService.getClientById(id);
            if (client == null) {
                return ResponseEntity.status(404).body("Client not found.");
            }
            client.setPassword(null); // Remove password before sending
            return ResponseEntity.ok(client);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred while fetching client profile.");
        }
    }

    // GET /auth/client/all
    @GetMapping(Paths.Clients.GET_ALL)
    public ResponseEntity<?> getAllClients() {
        try {
            List<Client> clients = clientService.getAll();
            clients.forEach(c -> c.setPassword(null));
            return ResponseEntity.ok(clients);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching clients");
        }
    }

    // GET /auth/client/all/{category}
    @GetMapping(Paths.Clients.GET_ALL_CATEGORY)
    public ResponseEntity<?> getClientsByCategory(@PathVariable("category") String category) {
        try {
            List<Client> clients = clientService.getAllCategory(category);
            clients.forEach(c -> c.setPassword(null));
            return ResponseEntity.ok(clients);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching clients");
        }
    }
}
