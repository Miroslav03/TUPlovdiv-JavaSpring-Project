package com.yourcompany.server.controllers;

import com.yourcompany.server.constants.Paths;
import com.yourcompany.server.models.offers.ClientOffer;
import com.yourcompany.server.models.requests.ApplyOfferRequest;
import com.yourcompany.server.models.requests.OfferCreationRequest;
import com.yourcompany.server.services.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/offers")
public class OfferClientsController {

    @Autowired
    private OfferService offerService;

    // GET /offers/all
    @GetMapping(Paths.Offers.ALL)
    public ResponseEntity<?> getAllOffers() {
        try {
            List<ClientOffer> offers = offerService.getAllClients();
            return ResponseEntity.ok(offers);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching offers");
        }
    }

    // GET /offers/all/{category}
    @GetMapping(Paths.Offers.ALL_CATEGORY)
    public ResponseEntity<?> getOffersByCategory(@PathVariable("category") String category) {
        try {
            List<ClientOffer> offers = offerService.getAllCategoryClients(category);
            return ResponseEntity.ok(offers);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching offers");
        }
    }

    // POST /offers/create
    // (Require isClient - implement via Spring Security if needed)
    @PostMapping(Paths.Offers.CREATE)
    public ResponseEntity<?> createOffer(@RequestBody OfferCreationRequest request) {
        try {
            offerService.createClient(request.getId(), request.getData());
            return ResponseEntity.ok("{\"status\": \"Success\"}");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error creating offer");
        }
    }

    // GET /offers/{id}
    @GetMapping(Paths.Offers.GET_ONE)
    public ResponseEntity<?> getOffer(@PathVariable("id") String offerId) {
        try {
            ClientOffer offer = offerService.getOneClient(offerId).orElse(null);
            return ResponseEntity.ok(offer);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching offer");
        }
    }

    // PUT /offers/edit/{id}
    // (Require isClient and isClientOfferOwner via security)
    @PutMapping(Paths.Offers.EDIT)
    public ResponseEntity<?> editOffer(@PathVariable("id") String offerId,
                                       @RequestBody ClientOffer newData) {
        try {
            ClientOffer offer = offerService.editClient(offerId, newData);
            return ResponseEntity.ok(offer);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error editing offer");
        }
    }

    // DELETE /offers/delete/{id}
    // (Require isClient and isClientOfferOwner)
    @DeleteMapping(Paths.Offers.DELETE)
    public ResponseEntity<?> deleteOffer(@PathVariable("id") String offerId) {
        try {
            offerService.deleteClient(offerId);
            return ResponseEntity.ok("{\"status\": \"Success\"}");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error deleting offer");
        }
    }

    // POST /offers/apply
    // (Require isFreelancer)
    @PostMapping(Paths.Offers.APPLY)
    public ResponseEntity<?> applyOffer(@RequestBody ApplyOfferRequest request) {
        try {
            offerService.applyFreelancer(request.getUserId(), request.getOfferId());
            offerService.updateAppliedOffersFreelancer(request.getUserId(), request.getOfferId());
            return ResponseEntity.ok("{\"status\": \"Success\"}");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error applying");
        }
    }

    // DELETE /offers/decline
    // (Require isClient)
    @DeleteMapping(Paths.Offers.DECLINE)
    public ResponseEntity<?> declineOffer(@RequestBody ApplyOfferRequest request) {
        try {
            offerService.declineFreelancer(request.getUserId(), request.getOfferId());
            return ResponseEntity.ok("{\"status\": \"Success\"}");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error declining");
        }
    }
}
