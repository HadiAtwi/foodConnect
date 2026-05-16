import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import './ProfilePage.css';

function ProfilePage() {
    const [profile, setProfile] = useState({ name: '', email: '', description: '' });
    const [editMode, setEditMode] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (user && user.id) {
            fetch(`http://localhost:8090/api/users/${user.id}`)
                .then(res => res.json())
                .then(data => setProfile(data))
                .catch(console.error);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setProfile(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            setProfile(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSave = () => {
        fetch(`http://localhost:8090/api/users/${user.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(profile),
        })
            .then(res => res.json())
            .then(data => {
                setProfile(data);
                setEditMode(false);
                alert("Profile updated!");
            })
            .catch(console.error);
    };

    return (
        <div>
            <Navbar />
            <div className="profile-container">
                <ProfileCard
                    profile={profile}
                    editMode={editMode}
                    onChange={handleChange}
                    onSave={handleSave}
                    onEdit={() => setEditMode(true)}
                />
            </div>
        </div>
    );
}

export default ProfilePage;
