import React, { useState } from "react";

function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageLogIn, setMessageLogIn] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const manageRegisterBackend = () => {
    registerBackend({
      name: name,
      mail: email,
      password: password,
    });
  };

  const manageLogInBackend = () => {
    logInBackend({
      mail: emailLogin,
      password: passwordLogin,
    });
  };

  function registerBackend(props) {
    fetch("http://localhost:4000/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    })
      .then((data) => data.json())
      .then((data) => {
        setMessage(data);
      })
      .catch((e) => {
        console.log("Hubo un error en el registro");
      });
  }

  function logInBackend(props) {
    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    })
      .then((data) => data.json())
      .then((data) => {
        setMessageLogIn(data);
      })
      .catch((e) => {
        console.log("Hubo un error en el login");
      });
  }

  return (
    <body id="ayudaPG">
      <div className="grid-container-help">
        <header className="cabecera">
          <div className="logo">
            <a href="http://localhost:3000/" className="linkLogo">
              <img src="./img/Logo.png" alt="Logo" className="imgLogo" />
            </a>
          </div>
          <nav className="menu">
            <ul className="menuPrincipal">
              <li className="listaMenu">
                <a href="http://localhost:3000/#destinos" className="itemMenu">
                  Donde ir
                </a>
              </li>
              <li className="listaMenu">
                <a href="http://localhost:3000/#autos" className="itemMenu">
                  Autos
                </a>
              </li>
              <li className="listaMenu">
                <a href="http://localhost:3000/#nosotros" className="itemMenu">
                  Nosotros
                </a>
              </li>
              <li className="listaMenu">
                <a href="http://localhost:3000/adminHotel" className="itemMenu">
                  Administrar hotel
                </a>
              </li>
              <li className="listaMenu">
                <a href="http://localhost:3000/auth" className="itemMenu">
                  LogIn
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div class="contenedor">
          <h2>REGISTRO</h2>
          <form action="javascript:void(0);">
            <fieldset class="elemento">
              <label for="nombre">Nombre:</label>
              <br />
              <input
                type="text"
                id="nombreRegister"
                placeholder="Escribe tu nombre"
                required="true"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <br />
              <label for="email">Email:</label>
              <br />
              <input
                type="email"
                id="emailRegister"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <br />

              <label for="password">Password:</label>
              <br />
              <input
                type="password"
                id="passwordRegister"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <br />
              <input type="submit" value="REGISTRAR" onClick={manageRegisterBackend} />
              <div>{message.message}</div>
            </fieldset>
          </form>
          <br />
          <h2>LOG IN</h2>
          <form action="javascript:void(0);">
            <fieldset class="elemento">
              <label for="email">Email:</label>
              <br />
              <input
                type="email"
                id="email"
                value={emailLogin}
                onChange={(event) => setEmailLogin(event.target.value)}
              />
              <br />

              <label for="password">Password:</label>
              <br />
              <input
                type="password"
                id="password"
                value={passwordLogin}
                onChange={(event) => setPasswordLogin(event.target.value)}
              />
              <input type="submit" value="LOG IN" onClick={manageLogInBackend} />
              <div>{messageLogIn.message}</div>
            </fieldset>
          </form>
        </div>
        <a
          href="https://wa.me/+59899213902?text=Buenos%20dias%20Nubemi,%20necesito%20asistencia!"
          className="whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>

        <footer className="footer" id="nosotros">
          <div className="contacto">
            <ul className="listaContacto">
              <li className="info direccion">
                <span className="material-icons">location_on</span>
                <a
                  href="https://goo.gl/maps/JxUmTZE59gT4wUrk6"
                  className="info direccion"
                >
                  Av. de las Americas 713
                </a>
              </li>
              <li className="info telefono">
                <span className="material-icons">stay_current_portrait</span>
                +59899213902
              </li>
              <li className="info email">
                <span className="material-icons">mail_outline</span>
                contacto@nubemi.com.uy
              </li>
            </ul>
          </div>
          <div className="redes">
            <ul className="menuSimple">
              <li className="listaRedes">
                <a href="https://www.facebook.com/">
                  <i className="fa fa-facebook" aria-hidden="true"></i>{" "}
                </a>
              </li>
              <li className="listaRedes">
                <a href="https://www.instagram.com">
                  <i className="fa fa-instagram" aria-hidden="true"></i>{" "}
                </a>
              </li>
              <li className="listaRedes">
                <a href="https://twitter.com/?lang=en">
                  <i className="fa fa-twitter" aria-hidden="true"></i>{" "}
                </a>
              </li>
              <li className="listaRedes">
                <a href="https://youtube.com">
                  <i className="fa fa-youtube" aria-hidden="true"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
          <div class="Copyright">
            <p>
              Copyright © 2021 - Diseño Web <br />
              Andrés Sanabria
            </p>
            <a
              href="https://wa.me/+59899213902?text=Buenos%20dias%20Nubemi,%20necesito%20asistencia!"
              className="whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
          </div>
        </footer>
      </div>
    </body>
  );
}
export default Auth;
