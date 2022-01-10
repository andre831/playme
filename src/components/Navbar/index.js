import { Link } from 'react-router-dom';
import './style.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Logo';

function Navbar() {
  return (
    <header>
        <nav>
            <div className="nav fixed-top">
                <Logo />
                <div className="nav-mobile-menu " id="">
                    <div className="logo-bar-1"></div>
                    <div className="logo-bar-2"></div>
                    <div className="logo-bar-3"></div>
                </div>
                <ul className="nav-itens">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default Navbar;