import React from 'react';
import { useSidebar } from '../Sidebar/SidebarClick';
import ProjetosCard from '../Dados/ProjetosCard';

const Experiencia = () => {
  const { sidebarOpen } = useSidebar();
  return (
    <div>
      <section className={`container ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="text-titulo">
          <h1 className="font-titulo">
            The
            <span className="cor-7"> Life </span>
            <br />
            is collection of
            <br />
            <span className="cor-7">experiences</span>.
          </h1>
          <div className="aviso">
            <p>
              <i
                className="bx bxs-bulb"
                style={{ color: '#F4F269', paddingRight: '10px' }}
              ></i>
              Passe o mouse por cima da experiência em específico para receber
              mais opções de interação.
            </p>
          </div>
        </div>
        <div className="ultimos-projetos">
          <div className="titulo-ultimos-projeto">
            <h3>projetos</h3>
            
          </div>

          <div className="container-card">
            <ProjetosCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiencia;
