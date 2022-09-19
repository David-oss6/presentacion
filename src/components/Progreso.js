import React from "react";
import logo from "../img/github_logo.png";
import tecnocasa from "../img/capturas de pantalla/tecnocasa.png";
import skyscanner from "../img/capturas de pantalla/skyscanner_clone.PNG";
import youtube from "../img/capturas de pantalla/youtube.PNG";
import crypto from "../img/capturas de pantalla/crypto.PNG";
import { useState } from "react";
import "../styles/progreso/progreso.scss";

export default function Progreso({ repos }) {
  const [orden, setOrden] = useState({
    direction: 0,
    texto: "nuevos primero",
  });
  const [clicked, setClicked] = useState(false);

  const handleOrder = (x) => {
    if (x === 0) {
      repos.sort((a, b) => {
        if (a.created_at > b.created_at) {
          return 1;
        } else if (a.created_at < b.created_at) {
          return -1;
        } else {
          return 0;
        }
      });
      setOrden({
        direction: 1,
        texto: "antiguos primero",
      });
    } else if (x == 1) {
      repos.sort((a, b) => {
        if (a.created_at > b.created_at) {
          return -1;
        } else if (a.created_at < b.created_at) {
          return 1;
        } else {
          return 0;
        }
      });
      setOrden({
        direction: 0,
        texto: "nuevos primero",
      });
    }
  };

  return (
    <>
      {repos && (
        <div className="git_fondo inicial">
          <div>
            <h5 className="myh5">Ejemplos de maquetación:</h5>
            <div className="img_container">
              <div>
                {" "}
                <p className="titulo_ejemplo">Tecnocasa</p>
                <a
                  target="_blank"
                  href="https://david-oss6.github.io/real_state/"
                >
                  <img
                    className="img_ejemplo"
                    src={tecnocasa}
                    alt="tecnocasa_clone"
                  />
                </a>
              </div>
              <div>
                <p className="titulo_ejemplo">Skyscanner</p>
                <a
                  target="_blank"
                  href="https://david-oss6.github.io/skyscanner_clone/"
                >
                  <img
                    className="img_ejemplo"
                    src={skyscanner}
                    alt="skyscanner_clone"
                  />
                </a>
              </div>
            </div>
            <br />
            <h5 className="myh5">Ejemplos de funcionalidad con Apis:</h5>
            <div className="img_container">
              <div>
                <p className="titulo_ejemplo">Cryptomonedas</p>
                <a
                  target="_blank"
                  href="https://david-oss6.github.io/cryptocurrency/"
                >
                  <img
                    className="img_ejemplo"
                    src={crypto}
                    alt="skyscanner_clone"
                  />
                </a>
              </div>
              <div>
                {" "}
                <p className="titulo_ejemplo">YoutubeApi</p>
                <a
                  target="_blank"
                  href="https://david-oss6.github.io/Sprint-9/"
                >
                  <img
                    className="img_ejemplo"
                    src={youtube}
                    alt="tecnocasa_clone"
                  />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <p className="texto_git">
            A continuación están listados mis proyectos subidos a Github. Del
            sprint 1 al 9 junto con interview task pertenecen a los ejercicios
            realizados durante mi formación. Los siguientes corresponden a mis
            propios proyectos.
            <br /> ¡No dudes en hacer click para ver el código!
          </p>
          <div className="h3Btn_container">
            <h3 className="h3Title">
              <img
                className="gitLogo"
                src={logo}
                title="https://github.com/David-oss6"
                alt="repositiorios"
              />
              Mis repositiorios en GitHub
            </h3>
            <div className="orderBox">
              <div
                className={
                  clicked
                    ? "handleOrderContainer btn_active"
                    : "handleOrderContainer btn_standby"
                }
                onClick={() => setClicked(!clicked)}
              >
                Odenar por: {clicked ? "" : orden.texto}
                {clicked && (
                  <div className="btnContainer">
                    <button className="orderBtn" onClick={() => handleOrder(0)}>
                      Los más antiguos primero
                    </button>
                    <button className="orderBtn" onClick={() => handleOrder(1)}>
                      Los más nuevos primero
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <ol className="repoList">
            {repos.map((repo, index) => (
              <li className="repoLi" key={index}>
                <div className="repoLi_container">
                  <p className="repoP">{index + 1}. </p>
                  <a
                    className="repoA"
                    target="_blank"
                    href={`https://github.com/David-oss6/${repo.name}`}
                  >
                    <p className="repoP">{repo.name}</p>
                  </a>
                </div>
                <p className="fechas">{repo.created_at.slice(0, 10)}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
}
