package com.yourcompany.server.models.offers;

import com.yourcompany.server.models.Freelancer;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

import javax.validation.constraints.NotNull;
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

    @DBRef
    private List<com.yourcompany.server.models.Client> signed;

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
    public List<com.yourcompany.server.models.Client> getSigned() {
        return signed;
    }
    public void setSigned(List<com.yourcompany.server.models.Client> signed) {
        this.signed = signed;
    }
}
