package com.example.demo.repository;

import com.example.demo.model.EventNotice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventNoticeRepository extends JpaRepository<EventNotice, Long> {
    boolean existsByLink(String link);
}
