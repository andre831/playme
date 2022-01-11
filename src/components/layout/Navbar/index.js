import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './style.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Logo';

function Navbar() {
    const [activeToggleNav, setActiveToggleNav] = useState('nav_itens');
    const [activeToggleIcon, setctiveToggleIcon] = useState('nav_mobile_menu');

    const toggleMenu = () => {
        activeToggleNav === 'nav_itens'
        ? setActiveToggleNav('nav_itens active')
        : setActiveToggleNav('nav_itens')

        activeToggleIcon === 'nav_mobile_menu'
        ? setctiveToggleIcon('nav_mobile_menu active')
        : setctiveToggleIcon('nav_mobile_menu')
    }

    return (
        <header>
            <nav>
                <div className="nav">
                    <Logo />
                    <div onClick={toggleMenu} className={activeToggleIcon}>
                        <div className="logo-bar-1"></div>
                        <div className="logo-bar-2"></div>
                        <div className="logo-bar-3"></div>
                    </div>
                    <ul className={activeToggleNav}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/latest">Latest</Link></li>
                        <li><Link to="/upcoming">Upcoming</Link></li>
                        <li><Link to="/popular">Popular</Link></li>
                        <li><Link to="/favorites">Favorites</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;