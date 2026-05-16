// App.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BrowserRouter as Router, Route,Routes,  Switch, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/LoginForm';
import NGOPortal from './components/NGOPortal';
import DonorPortal from './components/DonorPortal';
import ProfilePage from './components/ProfilePage';
import Webinars from './components/Webinars';
import FAQ from './components/FAQ';
import Matching from './components/Matching';
import ProposalRequests from './components/ProposalRequests'; 
import PortalLayout from './layout/PortalLayout';
import LandingPage from './pages/LandingPage';
import './App.css';
/*
//function App() {
    const [user, setUser] = useState(null);

    const handleLogin = (username, password) => {
        fetch('http://localhost:8090/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Fetched data:', data); // Make sure this logs the correct data
                setUser(data); // Updates the state
                console.log('After setUser, user:', user); // This will still log the old `user` (expected behavior)
            })       
            useEffect(() => {
                console.log('User state updated:', user); // Logs when `user` changes
            }, [user])     
            .catch((error) => {
                console.error('Login failed:', error);
            });
    };

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/login">
                    <LoginForm onLogin={handleLogin} />
                </Route>
                {user && user.role === 'ROLE_NGO' && (
                    <Route path="/ngo">
                        <NgoPage />
                    </Route>
                )}
                {user && user.role === 'ROLE_Donor' && (
                    <Route path="/donor">
                        <DonorPage />
                    </Route>
                )}
                <Redirect to="/" />
            </Switch>
        </Router>
    );
//}

//export default App;
*/


function App() {
  return (
      <Router>
        
          <Routes>
                {/* Login Route */}
                <Route path="/login" element={<Login />} />
                {/* Donor Portal Route */}
                <Route path="/donor" element={<DonorPortal />} />

                <Route path="/landing" element={<LandingPage />} />
                
                {/* NGO Portal Route */}
                <Route path="/ngo" element={<NGOPortal />} />

                {/*Profile page Route */}
                <Route path="/profile" element={<ProfilePage />} />

                <Route path="/proposals" element={<ProposalRequests />} />

                <Route path="/webinars" element={<Webinars />} />

                <Route path="/matching" element={<Matching />} />

                <Route path="/faq" element={<FAQ />} />
                
          </Routes>
        
      </Router>
  );
}

export default App;