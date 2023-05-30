import React from "react";
import logo from "../img/github_logo.png";
import tecnocasa from "../img/capturas de pantalla/tecnocasa.png";
import skyscanner from "../img/capturas de pantalla/skyscanner_clone.PNG";
import chat from '../img/chat.png'
import crypto from "../img/capturas de pantalla/crypto.PNG";
import { useState } from "react";
import "../styles/progreso/progreso.scss";

export default function Progreso({ repos }) {
  const [orden, setOrden] = useState({
    direction: 0,
    texto: "new first",
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
        texto: "older first",
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
        texto: "new first",
      });
    }
  };

  return (
    <>
      {repos && (
        <div className="git_fondo inicial">
          <div>
            <h5 className="myh5">Some exemples:</h5>
            <div className="img_container">
              <div className="card-container">
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
                <p>
                  A layout clone of Tecnocasa. <br />
                  Built with React.js
                </p>
              </div>
              <div className="card-container">
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
                <p>
                  A layout clone of Skyscanner.<br />
                  Build with React.js
                </p>
              </div>
              <div className="card-container">
                <p className="titulo_ejemplo">Cryptocurrency</p>
                <a
                  target="_blank"
                  href="https://david-oss6.github.io/cryptocurrency/"
                >
                  <img
                    className="img_ejemplo"
                    src={crypto}
                    alt="cryptocurrency"
                  />
                </a>
                <p>
                  Calling a free API (https://rapidapi.com/Glavier/api/binance43/) to obtain cryptocurrency values and fluctuations.<br />
                  Build with React.js and axios.
                </p>
              </div>
              <div className="card-container" >
                {" "}
                <p className="titulo_ejemplo">Chat</p>
                <a
                  target="_blank"
                  href="https://github.com/David-oss6/chat"
                >
                  <img
                    className="img_ejemplo"
                    src={chat}
                    alt="chat"
                  />
                </a>
                <p>
                  Chat is developed with Javascript at the frontend and Typescript at the backend. Using mainly socket.io and NodeJs at the backend. And MongoDB as a  database. <br />
                  Using React at the frontend separating the client and backend into two different servers.
                </p>
              </div>
            </div>
          </div>
          <hr />

          <div className="h3Btn_container">
            <h3 className="h3Title">
              <img
                className="gitLogo"
                src={logo}
                title="https://github.com/David-oss6"
                alt="repositiorios"
              />
              My GitHub repositories
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
                Order by: {clicked ? "" : orden.texto}
                {clicked && (
                  <div className="btnContainer">
                    <button className="orderBtn" onClick={() => handleOrder(0)}>
                      Oldest first
                    </button>
                    <button className="orderBtn" onClick={() => handleOrder(1)}>
                      New first
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <ol className="repoList">
            {repos.map((repo, index) => (
              <li className="repoLi" key={index}>
                <a
                  className="repoA"
                  target="_blank"
                  href={`https://github.com/David-oss6/${repo.name}`}
                >
                  <div className="repoLi_container">
                    <p className="repoP">{index + 1}. </p>
                    <p className="repoP">{repo.name}</p>
                  </div>
                  <p className="fechas">{repo.created_at.slice(0, 10)}</p>
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
}
