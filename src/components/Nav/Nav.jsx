import React, { useState } from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {
    const [state, setState] = useState({active: 'about'})

    function handleClick(e) {
        setState({
            active: e.target.id
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.menu_container}>
                <ul>
                    <li>
                        <Link 
                            to='/' 
                            className={state.active === 'about' ? styles.active : styles.menu_button}
                            id='about'
                            onClick={e => handleClick(e)}
                        >Sobre mi</Link>
                    </li>
                    <li>
                        <Link 
                            to='/portafolio' 
                            className={state.active === 'projects' ? styles.active : styles.menu_button}
                            id='projects'
                            onClick={handleClick}
                        >Proyectos</Link>
                    </li>
                    <li>
                        <Link 
                            to='/contacto' 
                            className={state.active === 'contact' ? styles.active : styles.menu_button}
                            id='contact'
                            onClick={handleClick}
                        >Contacto</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Nav;