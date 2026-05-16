package com.example.demo.repository;

import com.example.demo.model.UndpNotice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UndpNoticeRepository extends JpaRepository<UndpNotice, Long> {
    boolean existsByLink(String detailLink); // avoid duplicates
}