import React, { useState } from "react";
import "../styles/Contacto/contactoStyle.scss";
import emailjs from "emailjs-com";

export default function Contacto() {
  const [errorMsg, setErrorMsg] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yd9e28o",
        "template_544a3wz",
        e.target,
        "1WNlpvtyHHtduc1HI"
      )
      .then(
        (result) => {
          setEnviado(true);
          setTimeout(() => {
            setEnviado(false);
          }, 3000);
          console.log(result.text);
        },
        (error) => {
          setErrorMsg(true);
          setTimeout(() => {
            setErrorMsg(false);
          }, 3000);
          console.log(error.text);
        }
      );
    emailjs.target.reset();
  };
  return (
    <>
      <div className=" fondo inicial">
        <form
          onSubmit={sendEmail}
          className="formContainer"
          action="/action_page.php"
        >
          <table className="tabla">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="fname">Name:</label>
                </td>
                <td>
                  <input
                    required={true}
                    className="inputForm"
                    type="text"
                    name="name"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="mail">Email @:</label>
                </td>
                <td>
                  <input
                    className="inputForm"
                    type="email"
                    id="mail"
                    name="mail"
                    required={true}
                  ></input>
                </td>
              </tr>
              <tr className="tr_message">
                <td className="label_msg">
                  <label htmlFor="lname">Message:</label>
                </td>
                <td>
                  <textarea
                    className="message inputForm"
                    type="text"
                    name="message"
                    required={true}
                  ></textarea>
                </td>
              </tr>

              <tr>
                <td></td>
                <td className="btnTd">
                  <input className="formBtn" value="Enviar" type="submit" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className={enviado ? "enviado" : "hide"}>Mensaje enviado</div>
        <div className={errorMsg ? "enviado" : "hide"}>Algo salió mal</div>
      </div>
    </>
  );
}
