import React, { useState } from "react";
import "../styles/sobremi/sobremiStyle.css";
import cvImage from "../img/cvImage.png";
import myPdf from "../pdf/Curriculum Vitae.pdf";

export default function SobreMi() {
  return (
    <>
      <div className="fondo inicial">
        <div>
          <p className="texto">
            !Hola! Soy David Iglesias y descubrí una vocación a finales de 2020
            de una manera totalmente casual... ¡¡DESARROLLO WEB!!
            <br />
            Tras un mes de autoaprendizaje decidí tomarmelo en serio y encontré
            una academia donde cursé los estudios para ser Front-end Developer.
            <br />
            En IT Academy aprendí los fundamentos de la programación con Java en
            un curso de 80 horas. A continuación empezó el contenido de verdad
            donde en un curso de 550 horas, que duró de abril a diciembre de
            2021, aprendí los estilos de la maquetación web con HTML, CSS y
            BOOTSTRAP; y por último la complejidad, dinamismo y el grandísimo
            abanico de posibilidades que aportan JavaScript y React.
            <br />
            Actualmente sigo autoformándome para estar al orden del día en este
            mundo tan dinámico y creativo que es la programación.
          </p>
        </div>
        <div className=" lenguajesDiv">
          <div>
            <h4 className="textoH3">Lenguajes y frameworks:</h4>
            <p className="lenguajesP">
              HTML, CSS, Sass, Bootstrap, Javascript y React.
            </p>
          </div>
          <div className="cvContainer">
            <h6 className="textoH3">Mi curriculum vitae:</h6>
            <a href={myPdf} target="_blank">
              <img
                className="cvImgOff"
                src={cvImage}
                alt="cv"
                title="curriculum"
              />
            </a>
          </div>
        </div>
        <div className="formacion_div">
          <h4 className="textoH3">
            Formacion en{" "}
            <a
              target="_blank"
              className="it_link"
              href="https://cibernarium.barcelonactiva.cat/es/it-academy2"
            >
              IT Academy
            </a>
            :
          </h4>
          <ul className="formacion_container">
            <li>
              <h6 className="formacion_h6">Java</h6>

              <p className="formacion_texto">
                Fundamentos de la programación con JAVA, curso de 80h. <br />
              </p>
            </li>
            <li>
              <h6 className="formacion_h6 ">
                HTML, CSS, Bootstrap, Javascript & React
              </h6>
              <p className="formacion_texto">
                Bootcamp centrado en el frontend. Enseñanza basada en los
                lenguajes mencionados y con tomas de contacto con Sass,
                Typescript y pruebas unitarias. La duración fue de 550h.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
