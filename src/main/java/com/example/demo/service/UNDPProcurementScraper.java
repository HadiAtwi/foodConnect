package com.example.demo.service;

import com.example.demo.model.UndpNotice;
import com.example.demo.model.EventNotice;
import com.example.demo.repository.EventNoticeRepository;
import com.example.demo.repository.UndpNoticeRepository;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UNDPProcurementScraper {
    private final UndpNoticeRepository UNDPRepository;
    private final EventNoticeRepository EventRepository;
    public UNDPProcurementScraper(UndpNoticeRepository UNDPRepository, EventNoticeRepository EventRepository) {
        this.UNDPRepository = UNDPRepository;
        this.EventRepository = EventRepository;
    }
    private static final String PROCUREMENT_URL = "https://www.undp.org/lebanon/procurement";
    private String text(Element parent, String css) {
        Element el = parent.selectFirst(css);
        return el != null ? el.text().trim() : "";
    }
    public List<UndpNotice> scrapeTenders() {
        List<UndpNotice> tenders = new ArrayList<>();

        // Setup ChromeDriver (headless mode)
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-blink-features=AutomationControlled");
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");

        WebDriver driver = new ChromeDriver(options);
        try {
            // Load page
            driver.get(PROCUREMENT_URL);

            // Get fully rendered HTML
            String pageSource = driver.getPageSource();

            // Parse with Jsoup
            Document doc = Jsoup.parse(pageSource);

            // Locate the table
            Element table = doc.selectFirst("table.standard.cellborder");
            if (table == null) {
                System.out.println("Procurement table not found!");
                return tenders;
            }

            Elements rows = table.select("tbody tr");
            for (Element row : rows) {
                Elements cols = row.select("td");

                String developmentArea = cols.get(0).text();
                String title = cols.get(1).text();
                String location = cols.get(2).text();
                String referenceNumber = cols.get(3).text();
                String postedDate = cols.get(4).text();
                String deadline = cols.get(5).text();
                String detailLink = cols.get(6).selectFirst("a").attr("href");

                // Skip if exists already
                if (UNDPRepository.existsByLink(detailLink)) {
                    continue;
                }

                UndpNotice notice = new UndpNotice(
                        developmentArea, title, location,
                        referenceNumber, postedDate, deadline, detailLink
                );

                UNDPRepository.save(notice);
                tenders.add(notice);
            }
        } finally {
            driver.quit(); // always close browser
        }

        return tenders;
    }

    public List<EventNotice> scrapeEvents(String url) {
        List<EventNotice> events = new ArrayList<>();

        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-blink-features=AutomationControlled");
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");

        WebDriver driver = new ChromeDriver(options);

        try {
            driver.get(url);
            String pageSource = driver.getPageSource();
            Document doc = Jsoup.parse(pageSource);

            // SELECT ALL CARDS
            Elements cards = doc.select("div.card-body.d-flex.flex-column.justify-content-between");

            for (Element card : cards) {

                // DATE RANGE
                String date = text(card, ".h6.mb-2.text-uppercase.text-smoke");

                // TITLE
                String title = text(card, "h4.h5.mb-3 span");

                // EVENT TYPE / BADGE
                String eventType = text(card, ".badge.badge-primary");

                // LOCATION (must strip the SVG)
                String location = "";
                Element locEl = card.selectFirst(".d-flex.flex-wrap .small");
                if (locEl != null) {
                    locEl.select("svg").remove();
                    location = locEl.text().trim();
                }
                // Skip if not Lebanon
                if (location == null || !location.toLowerCase().contains("lebanon")) {
                    continue;
                }

                // LINK — the card is inside <a>
                String link = "";
                Element linkEl = card.closest("a");
                if (linkEl != null) link = linkEl.attr("href");
                if (EventRepository.existsByLink(link)) {
                    continue;
                }
                EventNotice notice = new EventNotice(date, title, eventType, location, link);
                EventRepository.save(notice);
                events.add(notice);
            }

        } finally {
            driver.quit();
        }

        return events.stream()
                .filter(e -> e.getLocation() != null &&
                        e.getLocation().toLowerCase().contains("lebanon"))
                .toList();
    }

}
