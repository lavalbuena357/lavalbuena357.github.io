/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styles from './Projects.module.css';
import { projects } from '../../utils/ProjectsData.js';
import { FaGithub } from 'react-icons/fa';

function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>Mi  trabajo</h1>
        <div className={styles.cards}>
          {projects.map((el, i) => {
            return (
              <div className={styles.card} key={i}>
                <a href={el.link} target='_blank'>
                  <h3>{el.title}</h3>
                </a>
                <p>{el.description}</p>
                <a href={el.link} target='_blank'>    
                  <object data={el.link}>Nexflit Clon</object>
                  <span>Visitar</span>
                </a>
                <a href={el.githubRepo} target='_blank'>Repositorio de Github <FaGithub className={styles.icon}/></a>
              </div>
            )
          })}
          <div className={styles.card}>
            <h3>En desarrollo...</h3>
            <p>Próximamente...</p>
            <img src='' alt="" />
          </div>
        </div>
      </div>  
    </div>
  )
};

export default Projects;