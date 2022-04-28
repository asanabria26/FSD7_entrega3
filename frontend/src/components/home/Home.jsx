import React, { useEffect, useState } from "react";
import CarList from "./CarList";
import DestinationList from "./DestinationList";
import PackagesList from "./PackagesList";

function Home() {
  const [destinationList, setDestinationList] = useState([]);
  const [carList, setCarList] = useState([]);
  const [packagesList, setPackagesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.allSettled([
      fetch("http://localhost:4000/destinations")
        .then((data) => data.json())
        .then((data) => {
          setDestinationList(data);
        })
        .catch((e) => {
          console.log("Hubo un error");
        }),
      fetch("http://localhost:4000/vehicles")
        .then((data) => data.json())
        .then((data) => {
          setCarList(data);
        })
        .catch((e) => {
          console.log("Hubo un error");
        }),
      fetch("http://localhost:4000/offerts")
        .then((data) => data.json())
        .then((data) => {
          setPackagesList(data);
        })
        .catch((e) => {
          console.log("Hubo un error");
        }),
    ]).finally(() => setLoading(false));
  }, []);

  return (
    <body id="body">
      <div className="grid-container">
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
        <div className="destacados">
          <div className="lema">
            <h1 className="lemaTitulo">
              TE MERECES
              <br />
              <span className="uruguay">URUGUAY</span>
            </h1>
          </div>
          <PackagesList packagesList={packagesList} />
        </div>
        <DestinationList destinationList={destinationList} loading={loading} />
        <CarList carList={carList} />

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
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li className="listaRedes">
                <a href="https://www.instagram.com">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li className="listaRedes">
                <a href="https://twitter.com/?lang=en">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li className="listaRedes">
                <a href="https://youtube.com">
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="Copyright">
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
              <i className="fa fa-whatsapp whatsapp-icon"></i>
            </a>
          </div>
        </footer>
      </div>
    </body>
  );
}

export default Home;
