import React from 'react';
import styles from './Main.module.css';
import profile from '../../utils/images/profile.png';
import { skills, learn } from '../../utils/skillsData';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1>Sobre mi</h1>
                <h2>Hola, soy Albert Valbuena</h2>
                <h3>Desarrollador Web Full Stack</h3>
                <p>Apasionado por la tecnología y los proyectos que desafíen mis capacidades analíticas
                    y me lleven a aprender cada día más.
                </p>
                <p>Me considero una persona creativa, abierta, que sabe escuchar pero también aportar mis ideas
                    cuando sean requeridas en mi grupo de trabajo.
                </p>
                <p>Enfocado en el desarrollo web bajo las tecnologías de mayor demanda actualmente, perfeccionando
                    y descubriendo nuevas herramientas que ayuden a solucionar problemas reales de manera escalable 
                    y limpia para llevar cada proyecto a los resultados esperados por mis clientes y/o grupo de trabajo
                    en el que me encuentre desarrollando.
                </p>
            </div>
            <div className={styles.picture}>
                <img src={profile} alt="foto de perfil albert valbuena" />
            </div>
            <div className={styles.skills}>
                <h3>Habilidades aprendidas:</h3>
                <div className={styles.skills_ctn}>
                    {skills.map((el, i) => 
                        <div className={styles.skill_item} key={i}>
                            <span>{el.icon}</span>
                            <span>{el.name}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.learns}>
                <h3>Habilidades pendientes o en progreso</h3>
                <div className={styles.learns_ctn}>
                    {learn.map((el, i) => 
                        <div className={styles.learn_item} key={i}>
                            <span>{el.icon}</span>
                            <span>{el.name}</span>
                        </div>
                    )}
                </div>
            </div>
            <p className={styles.invite}>Lo invito a visitar mi <Link to='/portafolio'>Portafolio</Link> para que tenga la oportunidad 
                    de ver un poco de mi trabajo.
            </p>
        </div>
    )
};

export default Main;