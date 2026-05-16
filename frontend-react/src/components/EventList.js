import React from 'react';
import './EventList.css'; // reuse the same CSS as CampaignList

function EventList({ items }) {
    return (
        <div className="campaign-list">
            <h3>Events and Webinars</h3>
            {items.length > 0 ? (
                <div className="cards-container">
                    {items.map(item => (
                        <div key={item.id} className="campaign-card">
                            <h4>{item.title}</h4>
                            <p><strong>Date:</strong> {item.date}</p>
                            <p><strong>Event Type:</strong> {item.eventType}</p>
                            <p><strong>Location:</strong> {item.location}</p>
                            <a href={item.link} target="_blank" rel="noreferrer">
                                <button className="learn-more-btn">Learn More</button>
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No items available.</p>
            )}
        </div>
    );
}

export default EventList;
