package com.example.server.models.offers;

import com.example.server.models.Freelancer;
import com.example.server.models.Client;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;
import java.util.ArrayList;
import java.util.List;

@Document(collection = "freelancerOffers")
public class FreelancerOffer {

    @Id
    private String id;

    @NotNull
    private String title;

    @NotNull
    private String imgUrl;

    @NotNull
    private String industry;

    @NotNull
    private String description;

    @DBRef
    private Freelancer owner;

    // For example, you can store messages as simple strings
    private List<String> messages;

    // Getters and setters for fields...
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
    public String getImgUrl() {
        return imgUrl;
    }
    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
    public String getIndustry() {
        return industry;
    }
    public void setIndustry(String industry) {
        this.industry = industry;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Freelancer getOwner() {
        return owner;
    }
    public void setOwner(Freelancer owner) {
        this.owner = owner;
    }
    public List<String> getMessages() {
        return messages;
    }
    public void setMessages(List<String> messages) {
        this.messages = messages;
    }
    
    // Add the missing addMessage method:
    public void addMessage(String userId, String message) {
        if (this.messages == null) {
            this.messages = new ArrayList<>();
        }
        // For simplicity, store a concatenated string (or create a Message class if you prefer)
        this.messages.add("From " + userId + ": " + message);
    }
}
