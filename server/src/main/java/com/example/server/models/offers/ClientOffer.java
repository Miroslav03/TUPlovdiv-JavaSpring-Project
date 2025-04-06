package com.example.server.models.offers;

import com.example.server.models.Client;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

import jakarta.validation.constraints.NotNull;
import java.util.List;

@Document(collection = "clientOffers")
public class ClientOffer {

    @Id
    private String id;

    @NotNull
    private String title;

    @NotNull
    private String industry;

    @NotNull
    private Double salary;

    @NotNull
    private String description;

    @DBRef
    private Client owner;

    @DBRef
    private List<com.example.server.models.Freelancer> applied;

    // Getters and setters
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getIndustry() {
        return industry;
    }
    public void setIndustry(String industry) {
        this.industry = industry;
    }
    public Double getSalary() {
        return salary;
    }
    public void setSalary(Double salary) {
        this.salary = salary;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Client getOwner() {
        return owner;
    }
    public void setOwner(Client owner) {
        this.owner = owner;
    }
    public List<com.example.server.models.Freelancer> getApplied() {
        return applied;
    }
    public void setApplied(List<com.example.server.models.Freelancer> applied) {
        this.applied = applied;
    }
}
