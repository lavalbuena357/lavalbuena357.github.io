import React from 'react';
import styles from './Footer.module.css';

function Footer() {

    const getYear = () => {
        return new Date().getFullYear();
    };

    return (
        <div className={styles.container}>
            <small>© {getYear()} - Albert Valbuena</small>
        </div>
    )
};

export default Footer;