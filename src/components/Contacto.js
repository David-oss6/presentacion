import React from "react";
import "../styles/Contacto/contactoStyle.scss";
import emailjs from "emailjs-com";

export default function Contacto() {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    emailjs.target.reset();
  };
  return (
    <>
      <div className="contenedor inicial">
        <p>No dudes en ponerte en contacto conmigo:</p>
        {/* On submit, send the form-data to a file named "action_page.php" (to
         process the input) */}
        <form
          onSubmit={sendEmail}
          className="formContainer"
          action="/action_page.php"
        >
          <table className="tabla">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="fname">Nombre:</label>
                </td>
                <td>
                  <input
                    required="true"
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
                    required="true"
                  ></input>
                </td>
              </tr>
              <tr className="tr_message">
                <td className="label_msg">
                  <label htmlFor="lname">Mensaje:</label>
                </td>
                <td>
                  <textarea
                    className="message inputForm"
                    type="text"
                    name="message"
                    required="true"
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
      </div>
    </>
  );
}
