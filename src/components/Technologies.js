import React from 'react';
import reactLogo from '../assets/images/react.png';
import reactNativeLogo from '../assets/images/react_native.png';
import css from '../assets/images/css.png';
import express from '../assets/images/express.png';
import html from '../assets/images/html.png';
import javascript from '../assets/images/javascript.png';
import mongo from '../assets/images/mongo.png';
import node from '../assets/images/node.png';
import odoo from '../assets/images/odoo.png';
import python from '../assets/images/python.png';
import postgresql from '../assets/images/postgresql.png';
import docker from '../assets/images/docker.png';

const Technologies = () => {
  return (
    <div>
      <h4>Tecnologias</h4>
      <img className='technology' src={reactLogo} alt="React" />
      <img className='technology' src={reactNativeLogo} alt="React Native" />
      <img className='technology' src={css} alt="CSS" />
      <img className='technology' src={express} alt="Express" />
      <img className='technology' src={html} alt="HTML" />
      <img className='technology' src={javascript} alt="Java Script" />
      <img className='technology' src={mongo} alt="Mongo" />
      <img className='technology' src={node} alt="Node" />
      <img className='technology' src={odoo} alt="Odoo" />
      <img className='technology' src={python} alt="Python" />
      <img className='technology' src={postgresql} alt="Postgresql" />
      <img className='technology' src={docker} alt="Docker" />
    </div>
  );
};

export default Technologies;