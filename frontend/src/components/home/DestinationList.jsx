import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const DestinationList = ({ destinationList, loading }) => {
  return (
    <div className="destinosVarios">
      <div className="Destinos">
        <h4 className="h2Destinos" name="tema1" id="destinos">
          Descubre nuestros destinos
        </h4>
      </div>
      <PacmanLoader loading={loading}></PacmanLoader>
      {destinationList.map((value) => {
        return (
          <div className="destino paq">
            <div className="foto foto1 oferta">
              <img className="fotoHotel" src={value.img} alt={value.name} />
            </div>
            <div className="textoLorem">
              <p className="oferta1Texto">
                {value.name} <br />
                {value.place} <br />
                {value.extra} <br />
                <br />
                {value.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DestinationList;
