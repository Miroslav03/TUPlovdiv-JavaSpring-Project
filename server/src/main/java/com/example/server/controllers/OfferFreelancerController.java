package com.yourcompany.server.controllers;

import com.yourcompany.server.constants.Paths;
import com.yourcompany.server.models.FreelancerOffer;
import com.yourcompany.server.requests.ApplyOfferRequest;
import com.yourcompany.server.requests.OfferCreationRequest;
import com.yourcompany.server.requests.SendMessageRequest;
import com.yourcompany.server.services.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/offers")
public class OfferFreelancerController {

    @Autowired
    private OfferService offerService;

    // GET /offers/all
    @GetMapping(Paths.Offers.ALL)
    public ResponseEntity<?> getAllFreelancerOffers() {
        try {
            List<FreelancerOffer> offers = offerService.getAllFreelancer();
            return ResponseEntity.ok(offers);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching offers");
        }
    }

    // GET /offers/all/{category}
    @GetMapping(Paths.Offers.ALL_CATEGORY)
    public ResponseEntity<?> getFreelancerOffersByCategory(@PathVariable("category") String category) {
        try {
            List<FreelancerOffer> offers = offerService.getAllCategoryFreelancer(category);
            return ResponseEntity.ok(offers);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching offers");
        }
    }

    // POST /offers/create
    // (Requires isFreelancer – implement using Spring Security or method-level security)
    @PostMapping(Paths.Offers.CREATE)
    public ResponseEntity<?> createFreelancerOffer(@RequestBody OfferCreationRequest request) {
        try {
            offerService.createFreelancer(request.getId(), request.getData());
            return ResponseEntity.ok("{\"status\": \"Success\"}");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error creating service");
        }
    }

    // GET /offers/{id}
    @GetMapping(Paths.Offers.GET_ONE)
    public ResponseEntity<?> getFreelancerOffer(@PathVariable("id") String offerId) {
        try {
            FreelancerOffer offer = offerService.getOneFreelancer(offerId);
            return ResponseEntity.ok(offer);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching offer");
        }
    }

    // PUT /offers/edit/{id}
    // (Requires isFreelancer and isFreelancerOfferOwner)
    @PutMapping(Paths.Offers.EDIT)
    public ResponseEntity<?> editFreelancerOffer(@PathVariable("id") String offerId,
                                                 @RequestBody FreelancerOffer data) {
        try {
            FreelancerOffer offer = offerService.editFreelancer(offerId, data);
            return ResponseEntity.ok(offer);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error editing offer");
        }
    }

    // DELETE /offers/delete/{id}
    // (Requires isFreelancer and isFreelancerOfferOwner)
    @DeleteMapping(Paths.Offers.DELETE)
    public ResponseEntity<?> deleteFreelancerOffer(@PathVariable("id") String offerId) {
        try {
            offerService.deleteFreelancer(offerId);
            return ResponseEntity.ok("{\"status\": \"Success\"}");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error deleting offer");
        }
    }

    // POST /offers/send
    // (Requires isClient)
    @PostMapping(Paths.Offers.SEND)
    public ResponseEntity<?> sendMessageToFreelancer(@RequestBody SendMessageRequest request) {
        try {
            offerService.sendMessageFreelancer(request.getUserId(), request.getOfferId(), request.getMessage());
            return ResponseEntity.ok("{\"status\": \"Success\"}");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending message");
        }
    }

    // DELETE /offers/decline
    // (Requires isFreelancer)
    @DeleteMapping(Paths.Offers.DECLINE)
    public ResponseEntity<?> declineOffer(@RequestBody ApplyOfferRequest request) {
        try {
            offerService.declineClinet(request.getUserId(), request.getOfferId());
            return ResponseEntity.ok("{\"status\": \"Success\"}");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error declining");
        }
    }
}
