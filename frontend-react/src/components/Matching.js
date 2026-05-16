// pages/Matching.js
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import './Matching.css';

function Matching() {
    const [match, setMatch] = useState(null);

    useEffect(() => {
        // Simulate fetching AI match from backend
        fetch("http://localhost:8090/matching")
            .then(res => res.json())
            .then(data => setMatch({ organization: "UNDP", location: "Lebanon" }))
            .catch(console.error);
    }, []);

    return (
        <div className="ngo-portal">
            <Navbar />
            <div className="ngo-body">
                <Sidebar />
                <main className="ngo-main">
                    <div className="matching-card">
                        <h3>NGO-Donor Matching</h3>
                        {match ? (
                            <>
                                <p>
                                    AI matched you with <strong>{match.organization}</strong> in <strong>{match.location}</strong>.
                                </p>
                                <p>
                                    Go now to <Link to="/ngo"><strong>Proposal Requests</strong></Link> to start matching with available tenders
                                </p>
                            </>
                        ) : (
                            <p>Finding the best donor match for you...</p>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Matching;
