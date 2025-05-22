import React from 'react';
import './Slidebar.css';

const roles = [
  "Choreography","Direction","Story Writing", "Screenplay Writing", "Dialogue Writing", "Cinematography", "Editing", "Art Direction", "Costume Design", "Makeup",
  "Hairstyling", "Stunt Coordination", "Acting", "Marketing", "Music Direction", "Background Score", "Lyrics Writing",
  "Singing (Playback)", "Sound Recording", "Dubbing", "Sound Mixing","Set Design","Lighting","Production Management"
	,"Publicity & Promotion"
];

const Sidebar = ({ onRoleSelect, selectedRole }) => {
  return (
    <div className="sidebar">
      {roles.map(role => (
        <button
          key={role}
          className={selectedRole === role ? 'active' : ''}
          onClick={() => onRoleSelect(role)}
        >
          {role}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
