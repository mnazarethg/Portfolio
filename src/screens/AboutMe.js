import React, { useEffect, useState } from 'react';
import '../App.css';
import '../stylesheets/AboutMe.css';
import Header from '../components/Header';
import Profile from '../components/Profile';
import ProfileDescription from '../components/ProfileDescription';
function AboutMe() {
  const [telonSubiendo, setSubiendo] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setSubiendo(true);
    }, 50); 

    return () => clearTimeout(timer); 
  }, []);

 
  return (
    <>
    <Header style={{ color: 'white' }}/>
    <div className={`menuPage ${telonSubiendo ? 'menuPageUp' : ''}`}>
    </div>
    <div style={{visibility: telonSubiendo ? 'visible' : 'hidden'}}>
    <div className='container-about-me'>
      <Profile />
      <ProfileDescription />
    </div>
    </div>
    </>
  );
}

export default AboutMe;
