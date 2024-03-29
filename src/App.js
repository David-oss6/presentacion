import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app/App.css";
import { useLayoutEffect, useEffect, useState } from "react";
import axios from "axios";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SobreMi from "./components/SobreMi";
import Progreso from "./components/Progreso";
import Contacto from "./components/Contacto";
import { LinkContainer, TitleContainer } from "./styles/app/styledApp";
import coding from "./img/coding_2.png";
import DropDown from "./components/dropdown/DropDown";
import linkedinIco from "./img/linkedin.png";
import instaIco from "./img/insta.png";
import gitIco from "./img/github.png";

function App() {
  const [repos, setRepos] = useState([]);
  const [inicio, setInicio] = useState(true);
  const [size, setSize] = useState();
  const [modal, setModal] = useState(null);


  useEffect(() => {
    setSize(window.innerWidth);
    try {
      axios(`https://api.github.com/users/David-oss6/repos`).then((res) =>
        handleRepos(res.data)
      );
    } catch (error) {
      console.log("fail");
    }
    setTimeout(() => {
      setInicio(false);

    }, 3000);
  }, []);
  const handleRepos = (repos) => {
    repos.sort((a, b) => {
      if (a.created_at > b.created_at) {
        return -1;
      } else if (a.created_at < b.created_at) {
        return 1;
      } else {
        return 0;
      }
    });
    setRepos(repos);
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", function () {
      setSize(window.innerWidth);
    });
  });
  useEffect(() => {
    if (size >= 680) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [size]);

  return (
    <Router>
      <>
        <div className="content_container">
          <nav className="navBar">
            <div className="title_hamburger_container">
              <TitleContainer className="titleContainer" inicio={inicio}>
                <div>
                  <h1
                    className={
                      inicio
                        ? "text-warning titul start_h1_size"
                        : "text-warning titulo"
                    }
                  >
                    Full-Stack Developer
                  </h1>
                  <div
                    className={inicio ? "header start_header_size" : "header"}
                  >
                    <p>David Iglesias Molina</p>
                    <p>im.david85@gmail.com</p>
                  </div>
                </div>
              </TitleContainer>
              {!inicio && modal && <DropDown />}
            </div>
            {!inicio && !modal && (
              <div className="enlaces neonText">
                <LinkContainer inicio={inicio}>
                  <Link

                    className="links"
                    to="/aboutme"
                  >
                    ABOUT ME
                  </Link>
                  <Link

                    className="links"
                    to="/progreso"
                  >
                    MY GITHUB
                  </Link>
                  <Link

                    className="links"
                    to="/contacto"
                  >
                    CONTACT
                  </Link>
                </LinkContainer>
              </div>
            )}
          </nav>
          <div>
            {inicio && (
              <>
                <div className="cuadrado"></div>
                <img className="coding" src={coding} alt="code" />
              </>
            )}

            {!inicio && (
              <>
                <Routes>
                  <Route exact path="/presentacion/" element={<SobreMi />} />
                  <Route exact path="/" element={<SobreMi />} />
                  <Route exact path="/aboutme" element={<SobreMi />} />
                  <Route
                    path="/progreso"
                    element={<Progreso repos={repos} />}
                  />
                  <Route path="/contacto" element={<Contacto />} />
                </Routes>
              </>
            )}
          </div>
        </div>
        {!inicio && (
          <footer
            className={modal ? "footer_modal footer_pin" : "footer footer_pin"}
          >
            <div className="link_container">
              <ul className="ulList ">
                <li>
                  <a
                    href="https://www.linkedin.com/in/david-i-01944a15b/"
                    target="_blank"
                    rel="linkedin"
                  >
                    <img
                      className="link_pic"
                      src={linkedinIco}
                      alt="linkedin"
                    />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/David_im85/"
                  >
                    <img className="link_pic" src={instaIco} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/David-oss6/">
                    <img className="link_pic_git" src={gitIco} alt="github" />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        )}
      </>
    </Router>
  );
}

export default App;
