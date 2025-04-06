package com.example.server.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;
import java.util.List;
import com.example.server.models.offers.ClientOffer;

@Document(collection = "freelancers")
public class Freelancer {

    @Id
    private String id;
    private String name;
    private String title;
    private String skills;
    private String hourRate;
    private String industry;
    private String email;
    private String imgUrl;
    private String password;
    private String description;
    
    @DBRef
    private List<ClientOffer> applied;  // Assumes a ClientOffer model exists

    private List<Recived> recived;  // "recived" as in your original code

    // Inner class representing each recived entry
    public static class Recived {
        @DBRef
        private Client user;  // Assumes a Client model exists
        private String description;

        // Getters and setters
        public Client getUser() {
            return user;
        }
        public void setUser(Client user) {
            this.user = user;
        }
        public String getDescription() {
            return description;
        }
        public void setDescription(String description) {
            this.description = description;
        }
    }

    // Getters and setters for Freelancer fields
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
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getSkills() {
        return skills;
    }
    public void setSkills(String skills) {
        this.skills = skills;
    }
    public String getHourRate() {
        return hourRate;
    }
    public void setHourRate(String hourRate) {
        this.hourRate = hourRate;
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
    public List<ClientOffer> getApplied() {
        return applied;
    }
    public void setApplied(List<ClientOffer> applied) {
        this.applied = applied;
    }
    public List<Recived> getRecived() {
        return recived;
    }
    public void setRecived(List<Recived> recived) {
        this.recived = recived;
    }
}
