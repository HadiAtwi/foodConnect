// NGOPortal.js
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CampaignList from '../components/CampaignList';
import './NGOPortal.css';

function NGOPortal() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8090/tenders")
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(console.error);
    }, []);

    return (
        <div className="ngo-portal">
            <Navbar />
            <div className="ngo-body">
                <Sidebar />
                <main className="ngo-main">
                    <CampaignList items={items} />
                </main>
            </div>
        </div>
    );
}

export default NGOPortal;
