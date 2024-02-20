import React, { useState, useEffect } from 'react';
import { PROJETOS } from './dados';
import { Link } from 'react-router-dom';

const ProjetosInicial = () => {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    const carregarImagens = async () => {
      try {
        const imagensImportadas = await Promise.all(
          PROJETOS.projetosbanner.map(async (projetosbanner) => {
            const imagemImportada = await projetosbanner.img;
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
      {imagens.map((imagem, index) => (
        <div className="card" key={index}>
          {imagem && <img src={imagem} alt="logo" />}
          <div className="card-titulo">
            <div className="descricao">
              <h2>{PROJETOS.projetosbanner[index].name}</h2>
              <p>{PROJETOS.projetosbanner[index].dsc}</p>
              <div className="categoria">
                {criarHTMLTecnologias(
                  PROJETOS.projetosbanner[index].tecnologias,
                )}
              </div>
            </div>
            <div className="home-buttons">
              <Link
                to={PROJETOS.projetosbanner[index].acessar}
                target="_blank"
                className="button"
              >
                <i className="bx bx-file-find"></i>
                Acessar
              </Link>
              <Link
                to={PROJETOS.projetosbanner[index].github}
                target="_blank"
                className="button button-secund"
              >
                <i className="bx bx-link-external"></i>
                GitHub
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjetosInicial;
