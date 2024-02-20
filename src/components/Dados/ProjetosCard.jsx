import React, { useState, useEffect } from 'react';
import { PROJETOS } from './dados';
import { Link } from 'react-router-dom';

const ProjetosCard = () => {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    const carregarImagens = async () => {
      try {
        const imagensImportadas = await Promise.all(
          PROJETOS.projetos.map(async (projeto) => {
            const imagemImportada = await projeto.img;
            return imagemImportada.default;
          }),
        );
        setImagens(imagensImportadas);
      } catch (erro) {
        console.error('Erro ao carregar imagens:', erro);
      }
    };

    carregarImagens();
  }, []);

  function criarHTMLTecnologias(tecnologias) {
    return Array.isArray(tecnologias) ? (
      tecnologias.map((tecnologia, index) => (
        <span key={index}>{tecnologia}</span>
      ))
    ) : (
      <span key={0}>{tecnologias}</span>
    );
  }

  return (
    <>
      {PROJETOS.projetos.map((projeto, index) => (
        <div className="card" key={index}>
          {imagens[index] && <img src={imagens[index]} alt="logo" />}
          <div className="card-titulo">
            <div className="descricao">
              <h2>{projeto.name}</h2>
              <p>{projeto.dsc}</p>
              <div className="categoria">
                {criarHTMLTecnologias(projeto.tecnologias)}
              </div>
            </div>
            <div className="home-buttons">
              <Link to={projeto.acessar} target='' className="button">
                <i className="bx bx-file-find"></i>
                Acessar
              </Link>
              <a href={projeto.github} className="button button-secund">
                <i className="bx bx-link-external"></i>
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjetosCard;
