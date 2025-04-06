package com.example.server.models;

import com.example.server.models.offers.ClientOffer;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "clients")
public class Client {

    @Id
    private String id;
    private String name;
    private String industry;
    private String email;
    private String imgUrl;
    private String password;
    private String description;
    private int employees;
    
    @DBRef
    private List<ClientOffer> createdJobs; // Assuming you have a ClientOffer model

    // Getters and setters
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getIndustry() {
        return industry;
    }
    public void setIndustry(String industry) {
        this.industry = industry;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getImgUrl() {
        return imgUrl;
    }
    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public int getEmployees() {
        return employees;
    }
    public void setEmployees(int employees) {
        this.employees = employees;
    }
    public List<ClientOffer> getCreatedJobs() {
        return createdJobs;
    }
    public void setCreatedJobs(List<ClientOffer> createdJobs) {
        this.createdJobs = createdJobs;
    }
}
