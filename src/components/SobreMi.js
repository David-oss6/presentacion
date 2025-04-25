import React, { useState } from "react";
import "../styles/sobremi/sobremiStyle.css";
import cvImage from "../img/cvImage.png";
import myPdf from "../pdf/curriculum.pdf";
import myEngPdf from "../pdf/en_curriculum.pdf";

export default function SobreMi() {
  return (
    <>
      <div className="fondo inicial">
        <div>
          <p className="texto">
            Inveterate optimist person eager to find my palce as a developer. Enthusiastic about technologies, innovation, mountaineering and scuba diving.
            At the end of 2020 I found myself learning to code with youtube and after a few weeks I decided to take it seriously.
            The first step was compliting a programming fundamentas course with JAVA.
            Affter that I`ve graduated from two boottcamps. In 2021 I completed the first one, dedicated to front-end with React.js. And in 2023 I completed the other specialized in back-end with Node.js, javascript and typescript.
            I'm skilled at creating web layouts, RESTful Apis, both SQL and NoSQL database design and managment and securing a fullstack application.
            I' m looking forward to find a team to work with, bring my skills and aptitudes and keep learning and grow as a developer.
            <br />
          </p>
        </div>
        <hr />
        <div >
          <h4 className="textoH3">
            Formation at{" "}
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
              <h6 className="formacion_h6">Programming funamentals with Java</h6>
              <p className="formacion_texto">
                <b>Duration:</b>april to may 2021, 80h. <br />
                <b>Location: </b> remote. <br />
                <b>Description:</b><br />
                In this course I learned the basics of programming with java. Started at what a variable is and finished at classes and class inheritance.
                <br />
              </p>
            </li>
            <li>
              <h6 className="formacion_h6 ">
                Front-end Bootcamp, React.js.
              </h6>
              <p className="formacion_texto">
                <b>Duration:</b> may 2021 to december 2021, 540h. <br />
                <b>Location: </b>  remote. <br />
                <b>Description:</b> <br />
                In this bootcamp I learned React funcionality. <br />
                Acquire the necessary skills to be able to create a wide variety of web applications. <br />
                Layout using different technological tools (HTML, CSS, SASS and Bootstrap) <br />
                Programming properly with JavaScript. <br />
                API request and response. <br />
                Understand how React works. <br />
                Create complex projects through the Redux.
              </p>
            </li>
            <li>
              <h6 className="formacion_h6 ">
                Back-end Bootcamp, Node.js.
              </h6>
              <p className="formacion_texto">
                <b>Duration:</b>  january 2023 to may 2023. <br />
                <b>Location: </b> Barcelona. <br />
                <b>Description:</b>  <br />
                This bootcamp I learned to use JavaScript (ES6) inside the server using a wide range of fast utilities that Node offers us running on Google's V8 engine. <br />
                Design and program relational and non-relational databse. <br />
                Learn to design APIs and build the software with the best programming practices recognized worldwide by the community. <br />
                Learn TypeScript language. <br />
                Apply testing correctly with TDD techniques and the Jest framework.<br />
                Understand the Express framework for building fast-response REST APIs with access to MongoDB and MySQL databases.<br />
                Use Sequelize and Mongoose as ORMs for data access.<br />
                Learn creative, structural, behavioral and other software patterns.<br />
                Adding security to APIs with JWT (JSON Web Tokens).<br />
                Explore the socket.io library to develop with web-sockets.<br />
              </p>
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </>
  );
}
