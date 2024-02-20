import React from 'react';
import { FERRAMENTAS } from './dados';

const Ferramentas = () => {
  return (
    <>
      {FERRAMENTAS.habilidades.map((habilidade, index) => (
        <div className="card-skil" key={index}>
          <div className="skil">
            <i className={`icon ${habilidade.icon}`}></i>
          </div>
          <span>{habilidade.dsc}</span>
        </div>
      ))}
    </>
  );
};

export default Ferramentas;
