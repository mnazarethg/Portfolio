import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import '../stylesheets/AboutMe.css'; 
import '../stylesheets/Projects.css'; 
import Odoo from '../assets/images/odoo.png';
import backHomeVideo from '../assets/videos/back_home.mp4'; 
import backHomeVideo2 from '../assets/videos/back_home2.mp4'; 
import partnersOdooVideo from '../assets/videos/partners_odoo.mp4'; 
import BackHome from '../assets/images/back_home.png';
import QRDesign from '../assets/images/qr-code.png';
import Header from './Header'; 

function Projects() {
  const [telonSubiendo, setSubiendo] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setSubiendo(true);
    }, 50); 

    return () => clearTimeout(timer); 
  }, []);

  const proyectos = [
    
    
    {
      id: 1,
      image: BackHome,
      tittle: "Back Home",
      description: [
        "Aplicación móvil desarrollada con React Native, diseñada para ofrecer una experiencia de usuario simple y fluida.",
        "Los campos de entrada estan definidos con validaciones específicas como el uso de teclado adecuado para el tipo de entrada esperada",
        "Entre las tecnologias utilizadas en el backend se encuentran Node.js, como entorno de ejecución para el servidor, MongoDB (base de datos noSQL), Mongoose para la modelación de los datos y Express como framework principal para crear el servidor web.",
      ],
      repository: "https://github.com/mnazarethg/BackHome",
      project: [backHomeVideo, backHomeVideo2]
    },
    {
      id: 2,
      image: Odoo,
      tittle: "Partners de Odoo",
      description:  [
        "Módulo de Odoo diseñado para registrar y graficar las relaciones de los clientes con los partners de Odoo desde el CRM.",
        "Incluye un modelo de datos completo a nivel de backend. La información se obtiene mediante el parseo de la página web oficial de Odoo, a partir de acciones planificadas.",
        "Además, el módulo integra funcionalidades de mensajería y seguimiento de actividades, permitiendo un registro detallado de interacciones.",
        "Incluye traducciones al español."
      ],
      repository: "https://github.com/usuario/proyecto1",
      project: partnersOdooVideo,
    },
    {
      id: 3,
      image: QRDesign,
      tittle: "QR Code Component",
      description:  [
        "En este proyecto de Frontend Mentor Challenges, trabajé en el diseño de una tarjeta estática, ideal para quienes están iniciando en el desarrollo web.",
        "Aunque el diseño no requiere adaptaciones responsivas, me permitió fortalecer habilidades en HTML y CSS, enfocándome en detalles visuales y estructuración semántica del código.",
      ],
      repository: "https://github.com/mnazarethg/qr-code",
      project: "https://mnazarethg.github.io/qr-code/",
    },

  ];

  return (
    <>
      <Header style={{ color: 'blue' }}/>
      <div className={`menuPage ${telonSubiendo ? 'menuPageUp' : ''}`}>
      </div>
      <div style={{visibility: telonSubiendo ? 'visible' : 'hidden'}}>
      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="project-item">
            <div className="project-info">
              <h1>{proyecto.tittle}</h1>
              <img className='photo' src={proyecto.image} alt={proyecto.tittle} />
              <div className='container-links'>
              <a className='links' href={proyecto.repository} target="_blank" rel="noopener noreferrer">REPOSITORIO</a>
              </div>
              <div className='container-links'>
                <Link className='links' to={`/project/${encodeURIComponent(proyecto.id)}`}>MULTIMEDIA</Link>
                </div>
            </div>
            <div>
              {Array.isArray(proyecto.description) ? (
                proyecto.description.map((line, index) => (
                  <p key={index} >{line}</p>
                ))
              ) : (
                <p>{proyecto.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Projects;