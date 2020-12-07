import React from 'react';
import logo from '../assets/img/icon.png';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header id="header">
            <div className="center">
                <div id="logo">
                    <img src={ logo } className="app-logo" alt="logotipo"></img>
                    <span id="brand">
                        <strong>Web</strong>Project
                    </span>
                </div>


                <nav id="menu">
                    <ul>
                        <li>
                            <NavLink to="/">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/miles-to-km">Tarea 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/party-list">Tarea 2</NavLink>
                        </li>
                    </ul>
                </nav>


                <div className="clearfix"></div>
            </div>
        </header>
    );
}

export default Header;