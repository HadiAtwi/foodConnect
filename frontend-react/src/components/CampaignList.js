import React from 'react';
import './CampaignList.css';

function CampaignList({ items }) {
    return (
        <div className="campaign-list">
            <h3>Proposal Requests</h3>
            {items.length > 0 ? (
                <div className="cards-container">
                    {items.map(item => (
                        <div key={item.id} className="campaign-card">
                            <h4>
                            {extractTitle(item.title)}
                            </h4>
                            <p><strong>Development Area:</strong> {item.developmentArea}</p>
                            <p><strong>Location:</strong> {item.location}</p>
                            <p><strong>Posted Date:</strong> {item.postedDate}</p>
                            <p><strong>Deadline:</strong> {item.deadline}</p>
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
const extractTitle = (title) => {
  // Step 1: Remove trailing "- ORG - LOCATION" if exists
  let cleaned = title.split(' - ')[0];

  // Step 2: Remove leading code: everything up to the first uppercase letter followed by lowercase letters
  const match = cleaned.match(/[A-Z][a-z].*/);
  return match ? match[0].trim() : cleaned.trim();
};







export default CampaignList;
