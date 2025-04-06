package com.yourcompany.server.services;

import com.yourcompany.server.models.Client;
import com.yourcompany.server.models.Freelancer;
import com.yourcompany.server.models.offers.ClientOffer;
import com.yourcompany.server.models.offers.FreelancerOffer;
import com.yourcompany.server.repositories.ClientOfferRepository;
import com.yourcompany.server.repositories.FreelancerOfferRepository;
import com.yourcompany.server.repositories.ClientRepository;
import com.yourcompany.server.repositories.FreelancerRepository;
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

    // Create a ClientOffer and update the client's createdJobs
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

    public List<FreelancerOffer> getAllFreelancer() {
        return freelancerOfferRepository.findAll();
    }

    public List<FreelancerOffer> getAllCategoryFreelancer(String category) {
        return freelancerOfferRepository.findByIndustry(category);
    }

    public List<ClientOffer> getAllClients() {
        return clientOfferRepository.findAll();
    }

    public List<ClientOffer> getAllCategoryClients(String category) {
        return clientOfferRepository.findByIndustry(category);
    }

    // For a freelancer applying to a client offer:
    public ClientOffer applyFreelancer(String userId, String offerId) {
        ClientOffer offer = clientOfferRepository.findById(offerId)
                .orElseThrow(() -> new RuntimeException("Offer not found"));
        Freelancer freelancer = freelancerRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Freelancer not found"));
        offer.getApplied().add(freelancer);
        return clientOfferRepository.save(offer);
    }

    // Update freelancer's applied offers (adds the offer to freelancer's applied list)
    public Freelancer updateAppliedOffersFreelancer(String idUser, String idOffer) {
        Freelancer freelancer = freelancerRepository.findById(idUser)
                .orElseThrow(() -> new RuntimeException("Freelancer not found"));
        ClientOffer offer = clientOfferRepository.findById(idOffer)
                .orElseThrow(() -> new RuntimeException("Offer not found"));
        freelancer.getApplied().add(offer);
        return freelancerRepository.save(freelancer);
    }

    // Decline freelancer from a client offer
    public ClientOffer declineFreelancer(String idUser, String idOffer) {
        ClientOffer offer = clientOfferRepository.findById(idOffer)
                .orElseThrow(() -> new RuntimeException("Offer not found"));
        offer.getApplied().removeIf(f -> f.getId().equals(idUser));
        return clientOfferRepository.save(offer);
    }

    // (Other methods for freelancer offers and sending messages can be added similarly.)
}
