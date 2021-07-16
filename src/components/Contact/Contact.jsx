import React from 'react';
import styles from './Contact.module.css';
import { social } from '../../utils/SocialData.js';

function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1>¿Cómo contactarme?</h1>
                <p>Si requiere contactarme, puede hacerlo a través de cualquiera de los
                    siguientes medios:
                </p>
                <div className={styles.social}>
                    <ul>
                        {social.map((el, i) => {
                            return (
                                <li key={i}>
                                    <a href={el.link}>
                                        <div className={styles.social_head}>
                                            {el.icon}
                                            <h2>{el.name}</h2>  
                                        </div> 
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.mail_phone}>
                    <div className={styles.phone}>
                        <span>Teléfono móvil:</span>
                        <a href="tel:+573206172165">(+57) 3206172165</a>
                    </div>
                    <div className={styles.mail}>
                        <span>Email:</span>
                        <a href="mailto:cuervo357@gmail.com">cuervo357@gmail.com</a>
                        <a href="mailto:lavalbuena357@gmail.com">lavalbuena357@gmail.com</a>
                        <a href="mailto:albert.v@live.com">albert.v@live.com</a>
                    </div>
                </div>
            </div>  
        </div>
    )
};

export default Contact;