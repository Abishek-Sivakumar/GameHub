package com.abishek.backend.model;

import jakarta.persistence.*;

import java.util.Arrays;

@Entity
public class Games {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String review;
    private String category;
    private String company;
    private int releaseYear;
    private int rating;
    private String imageName;
    private String imageType;
    @Lob //This is very Important
    private byte[] imageData;

    public Games(){

    }

    public Games(Long id, String name, String review, String category, String company, int releaseYear, int rating, String imageName, String imageType, byte[] imageData) {
        this.id = id;
        this.name = name;
        this.review = review;
        this.category = category;
        this.company = company;
        this.releaseYear = releaseYear;
        this.rating = rating;
        this.imageName = imageName;
        this.imageType = imageType;
        this.imageData = imageData;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public int getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(int releaseYear) {
        this.releaseYear = releaseYear;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public String getImageType() {
        return imageType;
    }

    public void setImageType(String imageType) {
        this.imageType = imageType;
    }

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }

    @Override
    public String toString() {
        return "Games{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", review='" + review + '\'' +
                ", category='" + category + '\'' +
                ", company='" + company + '\'' +
                ", releaseYear=" + releaseYear +
                ", rating=" + rating +
                ", imageName='" + imageName + '\'' +
                ", imageType='" + imageType + '\'' +
                ", imageData=" + Arrays.toString(imageData) +
                '}';
    }
}
