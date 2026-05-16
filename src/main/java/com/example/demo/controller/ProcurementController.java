package com.example.demo.controller;

import com.example.demo.model.EventNotice;
import com.example.demo.model.UndpNotice;
import com.example.demo.repository.EventNoticeRepository;
import com.example.demo.repository.UndpNoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.service.UNDPProcurementScraper;
import java.io.IOException;
import java.util.List;

@RestController
public class ProcurementController {

    @Autowired
    private UNDPProcurementScraper scraper;
    @Autowired
    private UndpNoticeRepository noticeRepository;
    @Autowired
    private EventNoticeRepository eventRepository;

    @GetMapping("/tenders")
    public List<UndpNotice> getTenders() {
        return noticeRepository.findAll();
    }
    @GetMapping("/scrapeT")
    public List<UndpNotice> scrapeT() {
        return scraper.scrapeTenders();
    }
    @GetMapping("/events")
    public List<EventNotice> getEvents() throws IOException {
        return eventRepository.findAll();

    }
    @GetMapping("/scrapeE")
    public List<EventNotice> scrapeE() {
        return scraper.scrapeEvents("https://www.unescwa.org/events/archived?type=" +
                "All&committee-type=All&focus-area=All&initiative=&cluster=All&sdgs=All" +
                "&keywords=&year=all");
    }


}
