import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../assets/scss/component/about/Navigation.scss';

export default function Navigation() {
    return (
        <nav className={styles.About}>
            <NavLink to={'/about/me'}>Me</NavLink>
            <NavLink to={'/about/Location'}>Location</NavLink>
        </nav>
    );
}