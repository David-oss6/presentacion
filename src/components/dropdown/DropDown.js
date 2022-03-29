import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";
import dropImg from "../../img/dropdown.png";

export default function DropDown() {
  const [drop, setDrop] = useState(false);
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
            onClick={() => setDrop(!drop)}
            className={drop ? "dropOn" : "dropOff"}
            to="/"
          >
            QUIEN SOY
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDrop(!drop)}
            className={drop ? "dropOn" : "dropOff"}
            to="/progreso"
          >
            MI GITHUB
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDrop(!drop)}
            className={drop ? "dropOn" : "dropOff"}
            to="/contacto"
          >
            CONTACTO
          </Link>
        </li>
      </ul>
    </div>
  );
}
