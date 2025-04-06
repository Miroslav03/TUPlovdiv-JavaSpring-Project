package com.example.server.controllers;

import com.example.server.constants.Paths;
import com.example.server.models.Freelancer;
import com.example.server.models.dtos.FreelancerDto;
import com.example.server.models.dtos.FreelancerResponseDto;
import com.example.server.services.FreelancerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/auth/freelancer")
public class FreelancerController {

    @Autowired
    private FreelancerService freelancerService;

    // POST /auth/freelancer/register
    @PostMapping(Paths.Freelancers.REGISTER)
    public ResponseEntity<?> register(@RequestBody FreelancerDto freelancerDto) {
        try {
            FreelancerResponseDto response = freelancerService.register(freelancerDto);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body("An error occurred during freelancer registration");
        }
    }

    // GET /auth/freelancer/profile/{id}
    @GetMapping(Paths.Freelancers.GET_ONE)
    public ResponseEntity<?> getFreelancerProfile(@PathVariable("id") String id) {
        try {
            Freelancer profile = freelancerService.getFreelancerProfile(id);
            if (profile == null) {
                return ResponseEntity.status(404).body("Freelancer not found.");
            }
            return ResponseEntity.ok(profile);
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body("An error occurred while fetching freelancer profile.");
        }
    }

    // GET /auth/freelancer/all
    @GetMapping(Paths.Freelancers.GET_ALL)
    public ResponseEntity<?> getAllFreelancers() {
        try {
            List<Freelancer> freelancers = freelancerService.getAll();
            return ResponseEntity.ok(freelancers);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching freelancers");
        }
    }

    // GET /auth/freelancer/all/{category}
    @GetMapping(Paths.Freelancers.GET_ALL_CATEGORY)
    public ResponseEntity<?> getFreelancersByCategory(@PathVariable("category") String category) {
        try {
            List<Freelancer> freelancers = freelancerService.getAllCategory(category);
            return ResponseEntity.ok(freelancers);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching freelancers");
        }
    }
}
