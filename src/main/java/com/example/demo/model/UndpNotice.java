package com.example.demo.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class UndpNotice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String developmentArea;

    public UndpNotice(String developmentArea, String title, String location,
                      String referenceNumber, String postedDate,
                      String deadline, String link) {
        this.developmentArea = developmentArea;
        this.title = title;
        this.location = location;
        this.referenceNumber = referenceNumber;
        this.postedDate = postedDate;
        this.deadline = deadline;
        this.link = link;
    }

    public UndpNotice() {

    }

    public String getDevelopmentArea() {
        return developmentArea;
    }

    public void setDevelopmentArea(String developmentArea) {
        this.developmentArea = developmentArea;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getReferenceNumber() {
        return referenceNumber;
    }

    public void setReferenceNumber(String referenceNumber) {
        this.referenceNumber = referenceNumber;
    }

    public String getPostedDate() {
        return postedDate;
    }

    public void setPostedDate(String postedDate) {
        this.postedDate = postedDate;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    private String title;
    private String location;
    private String referenceNumber;
    private String postedDate;
    private String deadline;
    private String link;
    // getters & setters
}