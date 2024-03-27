import React, { useEffect, useState } from 'react';
import ProjetosInicial from '../Dados/ProjetosInicial';
import { useSidebar } from '../Sidebar/SidebarClick';
import { Link } from 'react-router-dom';
import curriculoPDF from '../../Assets/pdf/FulStack.pdf';

const Home = () => {
  const { sidebarOpen } = useSidebar();
  return (
    <div>
      <section className={`container ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="text-titulo">
          <h1 className="font-titulo">
            Use
            <span className="cor-7"> technology </span>
            to make
            <br />
            the
            <span className="cor-7"> difference</span>.
          </h1>
          <p className="font-p">
            Olá, Luiz Henrique ao seu dispor.{' '}
            <span className="cor-7">Eu sou um Desenvolvedor Full Stack.</span>
          </p>
        </div>

        <div className="home-buttons">
          <a href={curriculoPDF} className="button" download>
            <i className="bx bx-file"></i>
            Currículo
            <div className="buttons-icons">
              <i className="bx bx-chevron-right"></i>
              <i className="bx bx-download"></i>
            </div>
          </a>

          <Link
            to="mailto:Luizhenriquejob4@gmail.com"
            className="button button-secund"
          >
            <i className="bx bx-envelope"></i>
            Email
            <div className="buttons-icons">
              <i className="bx bx-chevron-right"></i>
              <i className="bx bx-at"></i>
            </div>
          </Link>
        </div>

        <div className="ultimos-projetos">
          <div className="titulo-ultimos-projeto">
            <h3>Últimos projetos</h3>
            <div className="button-ultimos-projeto">
              <Link to="/portfolio/experiencia" className="button">
                Ver mais
                <div className="buttons-icons">
                  <i className="bx bx-chevron-right"></i>
                  <i className="bx bx-chevrons-right"></i>
                </div>
              </Link>
            </div>
          </div>
          <div className="container-card">
            <ProjetosInicial />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
