import React from 'react';
import { useSidebar } from '../Sidebar/SidebarClick';
import Ferramentas from '../Dados/FerramentasCard';

const Sobre = () => {
  const { sidebarOpen } = useSidebar();
  return (
    <div>
      <section className={`container ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="text-titulo">
          <h1 className="font-titulo">
            Turn
            <span className="cor-7"> Coffe </span>
            <br />
            into
            <span className="cor-7"> code</span>.
          </h1>
          <p className="font-p">
            Eu me chamo Luiz, tenho 22 anos e sou Desenvolvedor Full Stack especializado na construção e design de
            experiências digitais!
            <span className="cor-7"> Moro no Rio de janeiro - Brasil</span>( Formado em Análise e Desenvolvimento de Sistemas ).
          </p>
        </div>

        <div className="container-card-skil">
          <h3>Ferramentas</h3>

          <div className="container-card">
            <Ferramentas/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
