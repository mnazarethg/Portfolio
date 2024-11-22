import React from 'react';
import '../stylesheets/Projects.css'; 
import qrCodeDesktop from '../assets/images/qr-code-desktop-design.jpg'

function ChallengeDetails() {
    const proyectos = [
    
    
        {
          id: 1,
          image: qrCodeDesktop,
          tittle: "QR Code",
          description: [
            "Aplicación móvil desarrollada con React Native, diseñada para ofrecer una experiencia de usuario simple y fluida.",
            "Los campos de entrada estan definidos con validaciones específicas como el uso de teclado adecuado para el tipo de entrada esperada",
            "Entre las tecnologias utilizadas en el backend se encuentran Node.js, como entorno de ejecución para el servidor, MongoDB (base de datos noSQL), Mongoose para la modelación de los datos y Express como framework principal para crear el servidor web.",
          ],
          repository: "https://github.com/mnazarethg/qr-code",
          //project: [backHomeVideo, backHomeVideo2]
        },
        {
          id: 2,
          //image: Odoo,
          tittle: "Partners de Odoo",
          description:  [
            "Módulo de Odoo diseñado para registrar y graficar las relaciones de los clientes con los partners de Odoo desde el CRM.",
            "Incluye un modelo de datos completo a nivel de backend. La información se obtiene mediante el parseo de la página web oficial de Odoo, a partir de acciones planificadas.",
            "Además, el módulo integra funcionalidades de mensajería y seguimiento de actividades, permitiendo un registro detallado de interacciones.",
            "Incluye traducciones al español."
          ],
          repository: "https://github.com/usuario/proyecto1",
          //project: partnersOdooVideo,
        },
        {
          id: 3,
          //image: frontendMentor,
          tittle: "Desafíos de Frontend Mentor",
          description:  [
            "En mis proyectos de Frontend Mentor Challenges, he desarrollado soluciones prácticas y atractivas para problemas de diseño y funcionalidad web, mejorando mis habilidades en HTML, CSS y JavaScript.",
            "He trabajado en interfaces responsivas y accesibles, aplicando las mejores prácticas de desarrollo front-end.",
            "Estos proyectos reflejan mi compromiso con el aprendizaje continuo y la creación de experiencias de usuario de alta calidad.",
          ],
          repository: "https://github.com/usuario/proyecto1",
          //project: partnersOdooVideo,
        },
      ];
    
      return (
        <>
        <header></header>
          <div className="projects-grid">
            {proyectos.map((proyecto) => (
              <div key={proyecto.id} className="project-item">
                <div className="project-info">
                  <h1>{proyecto.tittle}</h1>
                  <img className='photo' src={proyecto.image} alt={proyecto.tittle} />
                  <div className='container-links'>
                  <a className='links' href={proyecto.id === 3 ? `/challenges` : proyecto.repository} target="_blank" rel="noopener noreferrer">
                    {proyecto.id === 3 ? "CHALLENGES" : "REPOSITORIO"}
                  </a>
                  </div>
                  {proyecto.id !== 3 && (
                  <div className='container-links'>
                    
                  </div>
                )}
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
        </>
      );
    }
    

export default ChallengeDetails;