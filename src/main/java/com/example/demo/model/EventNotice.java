package com.example.demo.model;

import jakarta.persistence.*;

@Entity
public class EventNotice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String date;
    private String title;
    private String eventType;
    private String location;

    @Column(unique = true)   // duplicate prevention at DB level
    private String link;

    public EventNotice() {}

    public EventNotice(String date, String title, String eventType, String location, String link) {
        this.date = date;
        this.title = title;
        this.eventType = eventType;
        this.location = location;
        this.link = link;
    }

    // Getters & Setters
    public Long getId() { return id; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getEventType() { return eventType; }
    public void setEventType(String eventType) { this.eventType = eventType; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getLink() { return link; }
    public void setLink(String link) { this.link = link; }
}
