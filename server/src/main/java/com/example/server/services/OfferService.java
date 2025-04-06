package com.example.server.services;

import com.example.server.models.Client;
import com.example.server.models.Freelancer;
import com.example.server.models.offers.ClientOffer;
import com.example.server.models.offers.FreelancerOffer;
import com.example.server.repositories.ClientOfferRepository;
import com.example.server.repositories.FreelancerOfferRepository;
import com.example.server.repositories.ClientRepository;
import com.example.server.repositories.FreelancerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class OfferService {

    @Autowired
    private ClientOfferRepository clientOfferRepository;

    @Autowired
    private FreelancerOfferRepository freelancerOfferRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private FreelancerRepository freelancerRepository;

    // --- Client Offer Methods ---
    public ClientOffer createClient(String id, ClientOffer offerData) {
        Optional<Client> clientOpt = clientRepository.findById(id);
        if (!clientOpt.isPresent()) {
            throw new RuntimeException("Client not found");
        }
        ClientOffer clientOffer = new ClientOffer();
        clientOffer.setOwner(clientOpt.get());
        clientOffer.setTitle(offerData.getTitle());
        clientOffer.setIndustry(offerData.getIndustry());
        clientOffer.setSalary(offerData.getSalary());
        clientOffer.setDescription(offerData.getDescription());
        ClientOffer savedOffer = clientOfferRepository.save(clientOffer);

        // Update client's createdJobs
        Client client = clientOpt.get();
        client.getCreatedJobs().add(savedOffer);
        clientRepository.save(client);

        return savedOffer;
    }

    public Optional<ClientOffer> getOneClient(String offerId) {
        return clientOfferRepository.findById(offerId);
    }

    public void deleteClient(String offerId) {
        clientOfferRepository.deleteById(offerId);
    }

    public ClientOffer editClient(String offerId, ClientOffer newData) {
        ClientOffer offer = clientOfferRepository.findById(offerId)
                .orElseThrow(() -> new RuntimeException("Offer not found"));
        offer.setTitle(newData.getTitle());
        offer.setIndustry(newData.getIndustry());
        offer.setSalary(newData.getSalary());
        offer.setDescription(newData.getDescription());
        return clientOfferRepository.save(offer);
    }

    public List<ClientOffer> getAllClients() {
        return clientOfferRepository.findAll();
    }

    public List<ClientOffer> getAllCategoryClients(String category) {
        return clientOfferRepository.findByIndustry(category);
    }

    public ClientOffer applyFreelancer(String userId, String offerId) {
        ClientOffer offer = clientOfferRepository.findById(offerId)
                .orElseThrow(() -> new RuntimeException("Offer not found"));
        Freelancer freelancer = freelancerRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Freelancer not found"));
        offer.getApplied().add(freelancer);
        return clientOfferRepository.save(offer);
    }

    public Freelancer updateAppliedOffersFreelancer(String idUser, String idOffer) {
        Freelancer freelancer = freelancerRepository.findById(idUser)
                .orElseThrow(() -> new RuntimeException("Freelancer not found"));
        ClientOffer offer = clientOfferRepository.findById(idOffer)
                .orElseThrow(() -> new RuntimeException("Offer not found"));
        freelancer.getApplied().add(offer);
        return freelancerRepository.save(freelancer);
    }

    public ClientOffer declineFreelancer(String idUser, String idOffer) {
        ClientOffer offer = clientOfferRepository.findById(idOffer)
                .orElseThrow(() -> new RuntimeException("Offer not found"));
        offer.getApplied().removeIf(f -> f.getId().equals(idUser));
        return clientOfferRepository.save(offer);
    }

    // --- Freelancer Offer Methods ---
    public FreelancerOffer createFreelancer(String freelancerId, FreelancerOffer offerData) {
        Optional<Freelancer> freelancerOpt = freelancerRepository.findById(freelancerId);
        if (!freelancerOpt.isPresent()) {
            throw new RuntimeException("Freelancer not found");
        }
        FreelancerOffer freelancerOffer = new FreelancerOffer();
        freelancerOffer.setOwner(freelancerOpt.get());
        freelancerOffer.setTitle(offerData.getTitle());
        freelancerOffer.setIndustry(offerData.getIndustry());
        freelancerOffer.setDescription(offerData.getDescription());
        freelancerOffer.setImgUrl(offerData.getImgUrl());
        return freelancerOfferRepository.save(freelancerOffer);
    }

    public FreelancerOffer getOneFreelancer(String offerId) {
        Optional<FreelancerOffer> offerOpt = freelancerOfferRepository.findById(offerId);
        return offerOpt.orElse(null);
    }

    public FreelancerOffer editFreelancer(String offerId, FreelancerOffer newData) {
        FreelancerOffer offer = freelancerOfferRepository.findById(offerId)
                .orElseThrow(() -> new RuntimeException("Offer not found"));
        offer.setTitle(newData.getTitle());
        offer.setIndustry(newData.getIndustry());
        offer.setDescription(newData.getDescription());
        offer.setImgUrl(newData.getImgUrl());
        return freelancerOfferRepository.save(offer);
    }

    public void deleteFreelancer(String offerId) {
        freelancerOfferRepository.deleteById(offerId);
    }

    public List<FreelancerOffer> getAllFreelancer() {
        return freelancerOfferRepository.findAll();
    }

    public List<FreelancerOffer> getAllCategoryFreelancer(String category) {
        return freelancerOfferRepository.findByIndustry(category);
    }

    public void sendMessageFreelancer(String userId, String offerId, String message) {
        FreelancerOffer offer = getOneFreelancer(offerId);
        if (offer == null) {
            throw new RuntimeException("Offer not found");
        }
        // Implement message logic—e.g., add a message record to the offer.
        offer.addMessage(userId, message); // Ensure FreelancerOffer has an addMessage() method
        freelancerOfferRepository.save(offer);
    }
}
