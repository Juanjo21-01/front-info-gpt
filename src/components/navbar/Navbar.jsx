import { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import logo from '../../assets/logo4.svg';
import Menu from './Menu';
import './navbar.css';

const Navbar = () => {
  // variable de estado
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar-links-container">
          <Menu />
        </div>
      </div>

      <div className="navbar-sign">
        <a>Iniciar Sesion</a>
        <button>Registrate</button>
      </div>

      {/* menu para movil */}
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu-container-links">
              <Menu />
              <div className="navbar-menu-container-sign">
                <a>Iniciar Sesion</a>
                <button>Registrate</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
