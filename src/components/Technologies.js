import React from 'react';
import reactLogo from '../assets/react.png';
import reactNativeLogo from '../assets/react_native.png';
import css from '../assets/css.png';
import express from '../assets/express.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import mongo from '../assets/mongo.png';
import node from '../assets/node.png';
import odoo from '../assets/odoo.png';
import python from '../assets/python.png';
import postgresql from '../assets/postgresql.png';
import docker from '../assets/docker.png';

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