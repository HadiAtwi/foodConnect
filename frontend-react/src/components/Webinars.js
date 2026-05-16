import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import React, { useEffect, useState } from 'react';
import EventList from '../components/EventList';
// pages/Webinars.js
function Webinars() {
  const [items, setItems] = useState([]);
  
      useEffect(() => {
          fetch("http://localhost:8090/events")
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
                        <EventList items={items} />
                    </main>
                </div>
            </div>
        );
}

export default Webinars;
