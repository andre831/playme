import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './style.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Logo';
import { ButtonOpenFavorites, SideBarFavorites} from './SideBarFavorites';

function Navbar(props) {
    const [activeToggleNav, setActiveToggleNav] = useState('nav_itens');
    const [activeToggleIcon, setctiveToggleIcon] = useState('nav_mobile_menu');
    const [activeToggleFavorites, setActiveToggleFavorites] = useState('SideBarFavorites-items');
    const [desactiveToggleFavorites, setDesactiveToggleFavorites] = useState('SideBarFavorites-icon');

    const toggleMenu = () => {
        activeToggleNav === 'nav_itens'
        ? setActiveToggleNav('nav_itens active')
        : setActiveToggleNav('nav_itens')

        activeToggleIcon === 'nav_mobile_menu'
        ? setctiveToggleIcon('nav_mobile_menu active')
        : setctiveToggleIcon('nav_mobile_menu')
    }

    const toggleOpenFavorites = () => {
        activeToggleFavorites === 'SideBarFavorites-items'
        ? setActiveToggleFavorites('SideBarFavorites-items active')
        : setActiveToggleFavorites('SideBarFavorites-items')

        desactiveToggleFavorites === 'SideBarFavorites-icon'
        ? setDesactiveToggleFavorites('SideBarFavorites-icon active')
        : setDesactiveToggleFavorites('SideBarFavorites-icon')

        activeToggleNav === 'nav_itens'
        ? setActiveToggleNav('nav_itens')
        : setActiveToggleNav('nav_itens')

        activeToggleIcon === 'nav_mobile_menu'
        ? setctiveToggleIcon('nav_mobile_menu')
        : setctiveToggleIcon('nav_mobile_menu')
    }

    const toggleCloseFavorites = () => {
        
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
                        <li><Link to="/toprated">Top Rated</Link></li>
                        <li><Link to="/upcoming">Upcoming</Link></li>
                        <li><Link to="/popular">Popular</Link></li>
                        <li>
                            <button onClick={toggleOpenFavorites} className={activeToggleFavorites} >
                                Favorites
                            </button>
                            <span className='nav-favCounter'>0</span>
                        </li>
                    </ul>
                </div>
            </nav>
            <SideBarFavorites 
                open={activeToggleFavorites}
                actionClose={toggleOpenFavorites}
                close={desactiveToggleFavorites}
            />
        </header>
    );
}


export default Navbar;