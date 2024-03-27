import React from 'react';
import Logof from '../../Assets/Luizhenrique.png';
import { Link } from 'react-router-dom';
import { useSidebar } from './SidebarClick';

const Sidebar = () => {
  const { sidebarOpen, handleToggleClick } = useSidebar();

  const closeSidebar = () => {
    if (sidebarOpen) {
      handleToggleClick();
    }
  };

  return (
    <div>
      <nav className={`sidebar ${sidebarOpen ? '' : 'close'}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src={Logof} alt="logo" />
            </span>

            <div className="text logo-text">
              <span className="name">Luiz Henrique</span>
              <span className="profissao">Full stack Developer</span>
            </div>
          </div>

          <i
            className="bx bx-chevron-right toggle toggle-f"
            onClick={handleToggleClick}
          ></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <div className="divisor-links">
                <span className="text div-nav">Navegação</span>
              </div>

              <li className="nav-link">
                <Link to="portfolio" onClick={closeSidebar}>
                  <div className="container-nav">
                    <i className="bx bx-home-alt icon"></i>
                    <span className="text nav-text">Home</span>
                  </div>
                </Link>
              </li>

              <li className="nav-link">
                <Link to="portfolio/sobre" onClick={closeSidebar}>
                  <div className="container-nav">
                    <i className="bx bx-user icon"></i>
                    <span className="text nav-text">Sobre</span>
                  </div>
                </Link>
              </li>

              <li className="nav-link">
                <Link to="portfolio/experiencia" onClick={closeSidebar}>
                  <div className="container-nav">
                    <i className="bx bx-briefcase-alt icon"></i>
                    <span className="text nav-text">Experiência</span>
                  </div>
                </Link>
              </li>

              <li className="nav-link" style={{ marginBottom: '20px' }}>
                <Link to="portfolio/educacao" onClick={closeSidebar}>
                  <div className="container-nav">
                    <i className="bx bx-book-alt icon"></i>
                    <span className="text nav-text">Educação</span>
                  </div>
                </Link>
              </li>
            </ul>
            <ul className="menu-links">
              <div className="divisor-links">
                <span className="text">Social</span>
              </div>

              <li className="nav-link">
                <Link
                  to="https://github.com/LuizHenr1que"
                  target="_blank"
                  onClick={closeSidebar}
                >
                  <div className="container-nav">
                    <i className="bx bxl-github icon"></i>
                    <span className="text nav-text">GitHub</span>
                  </div>
                  <i className="bx bx-link-external icon"></i>
                </Link>
              </li>

              <li className="nav-link">
                <Link
                  to="https://www.linkedin.com/in/luiz-henrique-761302187/"
                  target="_blank"
                  onClick={closeSidebar}
                >
                  <div className="container-nav">
                    <i className="bx bxl-linkedin-square icon"></i>
                    <span className="text nav-text">LinkedIn</span>
                  </div>
                  <i className="bx bx-link-external icon"></i>
                </Link>
              </li>

              <li className="nav-link" style={{ marginTop: '30px' }}>
                <Link
                  to="mailto:Luizhenriquejob4@gmail.com"
                  onClick={closeSidebar}
                >
                  <div className="container-nav">
                    <i className="bx bx-envelope icon"></i>
                    <span className="text nav-text">Me mande um email</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button id="toggleButton" className="toggle" onClick={handleToggleClick}>
        <i className="bx bx-command icon"></i>
      </button>
    </div>
  );
};

export default Sidebar;
