import React from 'react';
import photo from '../assets/images/photo.jpeg';
import { Link } from 'react-router-dom';
import Technologies from './Technologies';

const Profile = () => {
  return (
    <div>
      <h1>María Nazareth Monti Gimenez.</h1>
      <img className='photo' src={photo} alt="María Nazareth Monti Gimenez" />
      <div>
      <Link to="/curriculum" className='links'>CURRICULUM VITAE</Link>
      </div>
      <Technologies />
    </div>
  );
};

export default Profile;