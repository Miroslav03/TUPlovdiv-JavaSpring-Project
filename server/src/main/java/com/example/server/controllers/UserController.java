package com.yourcompany.server.controllers;

import com.yourcompany.server.requests.DescriptionRequest;
import com.yourcompany.server.requests.LoginRequest;
import com.yourcompany.server.requests.TokenRequest;
import com.yourcompany.server.responses.UserResponse;
import com.yourcompany.server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    // POST /users/login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            UserResponse response = userService.login(request);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // POST /users/logout
    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestBody TokenRequest request) {
        if (request.getToken() == null || request.getToken().isEmpty()) {
            return ResponseEntity.badRequest().body("Token is required");
        }
        try {
            userService.logout(request.getToken());
            return ResponseEntity.ok("{\"message\": \"Logout successful\"}");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("{\"error\": \"An error occurred during logout\"}");
        }
    }

    // GET /users/profile/{id}
    @GetMapping("/profile/{id}")
    public ResponseEntity<?> getProfile(@PathVariable("id") String id) {
        try {
            Object profile = userService.getUserProfile(id);
            if (profile == null) {
                return ResponseEntity.status(404).body("{\"error\": \"User not found.\"}");
            }
            return ResponseEntity.ok(profile);
        } catch (Exception e) {
            return ResponseEntity.status(500)
                                 .body("{\"error\": \"An error occurred while fetching user profile.\"}");
        }
    }

    // POST /users/description/add/{id}
    @PostMapping("/description/add/{id}")
    public ResponseEntity<?> addDescription(@PathVariable("id") String id,
                                            @RequestBody DescriptionRequest request) {
        try {
            String result = userService.addDescription(id, request.getDescription());
            return ResponseEntity.ok("{\"message\": \"" + result + "\"}");
        } catch (Exception e) {
            return ResponseEntity.status(500)
                                 .body("{\"error\": \"An error occurred during adding description\"}");
        }
    }

    // PUT /users/description/edit/{id}
    @PutMapping("/description/edit/{id}")
    public ResponseEntity<?> editDescription(@PathVariable("id") String id,
                                             @RequestBody DescriptionRequest request) {
        try {
            String result = userService.addDescription(id, request.getDescription());
            return ResponseEntity.ok("{\"message\": \"" + result + "\"}");
        } catch (Exception e) {
            return ResponseEntity.status(404)
                                 .body("{\"error\": \"" + e.getMessage() + "\"}");
        }
    }
}
