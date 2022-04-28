import React from "react";

const CarList = ({ carList }) => {
  return (
    <div className="autos" id="autos">
      <div className="autosAlquilerTitulo">
        <h4 className="h2Autos">Vehículos en alquiler</h4>
      </div>
      {carList.map((value) => {
        return (
          <div className="auto paq">
            <div className="oferta">
              <img className="fotoAuto" src={value.img} alt={value.name} />
            </div>
            <p className="oferta1Texto">
              {value.name} <br />
              {value.price} <br />
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CarList;
