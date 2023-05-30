import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";
import dropImg from "../../img/dropdown.png";

export default function DropDown() {
  const [drop, setDrop] = useState(false);
  const handleClick = () => {
    setDrop(!drop);
  };
  return (
    <div className="drop_container">
      <img
        onClick={() => setDrop(!drop)}
        className="dropImg dropdownBtn"
        src={dropImg}
        alt="dropdown"
      />
      <ul className={drop ? "drop_ul drop_ul_border" : "drop_ul"}>
        <li>
          <Link
            onClick={() => handleClick()}
            className={drop ? "dropOn" : "dropOff"}
            to="/aboutme"
          >
            ABOUT ME
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleClick()}
            className={drop ? "dropOn" : "dropOff"}
            to="/progreso"
          >
            MY GITHUB
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleClick()}
            className={drop ? "dropOn" : "dropOff"}
            to="/contacto"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}
