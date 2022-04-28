import React from "react";

const PackagesList = ({ packagesList }) => {
  return (
    <div className="paquetes">
      {packagesList.map((value) => {
        return (
          <div className="paq">
            <div className="oferta">
              <img className="fotoHotel" src={value.img} alt={value.name} />
            </div>
            <div>
              <p className="oferta1Texto">
                {value.name} <br />
                {value.place} <br />
                {value.extra} <br />
                +
                <br />
                <b>{value.price}</b>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PackagesList;
