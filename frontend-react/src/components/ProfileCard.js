import React from 'react';
import './ProfileCard.css';

function ProfileCard({ profile, editMode, onChange, onSave, onEdit }) {
    if (!profile) return <div className="profile-card">Loading profile...</div>;

    return (
        <div className="profile-card">
    <h3>My Profile</h3>

    {editMode ? (
        <div className="form-grid">
            <div className="col">
                <input name="name" value={profile.name} onChange={onChange} placeholder="Name" />
                <input name="email" value={profile.email} onChange={onChange} placeholder="Email" />
                <textarea name="description" value={profile.description} onChange={onChange} placeholder="Description" />
                <textarea name="mission" value={profile.mission} onChange={onChange} placeholder="Mission" />
                <textarea name="vision" value={profile.vision} onChange={onChange} placeholder="Vision" />
            </div>

            <div className="col">
                <input name="focusAreas" value={profile.focusAreas} onChange={onChange} placeholder="Focus Areas" />
                <input name="location" value={profile.location} onChange={onChange} placeholder="Location" />
                <input name="foundingYear" value={profile.foundingYear} onChange={onChange} placeholder="Founding Year" />
                <input name="registrationNumber" value={profile.registrationNumber} onChange={onChange} placeholder="Registration Number" />
                <input name="website" value={profile.website} onChange={onChange} placeholder="Website" />

                <h4>Social Links</h4>
                <input name="socialLinks.facebook" value={profile.socialLinks?.facebook || ''} onChange={onChange} placeholder="Facebook" />
                <input name="socialLinks.twitter" value={profile.socialLinks?.twitter || ''} onChange={onChange} placeholder="Twitter" />
                <input name="socialLinks.linkedin" value={profile.socialLinks?.linkedin || ''} onChange={onChange} placeholder="LinkedIn" />
            </div>
        </div>
    ) : (
        <div className="form-grid">
            <div className="col">
                <p><strong>Name:</strong> {profile.name || 'N/A'}</p>
                <p><strong>Email:</strong> {profile.email || 'N/A'}</p>
                <p><strong>Description:</strong> {profile.description || 'N/A'}</p>
                <p><strong>Mission:</strong> {profile.mission || 'N/A'}</p>
                <p><strong>Vision:</strong> {profile.vision || 'N/A'}</p>
            </div>

            <div className="col">
                <p><strong>Focus Areas:</strong> {profile.focusAreas || 'N/A'}</p>
                <p><strong>Location:</strong> {profile.location || 'N/A'}</p>
                <p><strong>Founding Year:</strong> {profile.foundingYear || 'N/A'}</p>
                <p><strong>Registration Number:</strong> {profile.registrationNumber || 'N/A'}</p>

                <p><strong>Website:</strong> {profile.website ? (
                    <a href={profile.website} target="_blank" rel="noreferrer">{profile.website}</a>
                ) : 'N/A'}</p>

            </div>
        </div>
    )}

        {!editMode ? (
            <button onClick={onEdit}>Edit Profile</button>
        ) : (
            <button onClick={onSave}>Save</button>
        )}
    </div>
        );
}

export default ProfileCard;
