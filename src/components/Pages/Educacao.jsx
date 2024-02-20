import React from 'react';
import estacio from '../../Assets/curso.png';
import origamid from '../../Assets/origamid.png';
import { useSidebar } from '../Sidebar/SidebarClick';

const Educacao = () => {
  const { sidebarOpen } = useSidebar();
  return (
    <div>
      <section className={`container ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="text-titulo">
          <h1 className="font-titulo">
            Invest
            <br />
            int the
            <span className="cor-7"> future</span>,
            <br />
            <span className="cor-7">study</span>.
          </h1>
        </div>

        <div className="list-education">
          <ul>
            <li className="course">
              <div className="course-img">
                <img src={estacio} alt="Estácio" />
              </div>
              <div className="box-text">
                <div className="course-text">
                  <h4>Análise e Desenvolvimento de Sistemas</h4>
                  <p>Fev. 2023 - Concluído</p>
                </div>
                <i className="bx bx-chevron-right"></i>
              </div>
            </li>
            <li className="course">
              <div className="course-img">
                <img src={origamid} alt="Origamid" />
              </div>
              <div className="box-text">
                <div className="course-text">
                  <h4>Origamid</h4>
                  <p>Jul. 2023 - em andamento</p>
                </div>
                <i className="bx bx-chevron-right"></i>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Educacao;
