import React from 'react';
import photo from '../assets/photo.jpeg';
import Technologies from './Technologies';

const Profile = () => {
  return (
    <div>
      <h1>María Nazareth Monti Gimenez.</h1>
      <img className='photo' src={photo} alt="María Nazareth Monti Gimenez" />
      <div>
        <a href='../assets/Maria_Nazareth_Monti_Giménez_Desarrolladora.pdf' className="links" download="Maria_Nazareth_Monti_Giménez_Desarrolladora.pdf">CURRICULUM VITAE</a>
      </div>
      <Technologies />
    </div>
  );
};

export default Profile;