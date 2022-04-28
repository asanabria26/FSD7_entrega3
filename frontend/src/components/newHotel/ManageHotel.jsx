import React, { useEffect, useState } from "react";


const ManageHotel = (props) => {
  const [hotelAction, setHotelaAction] = useState("Agregar");
  const [hotelId, setHotelaId] = useState("");
  var [hotelName, setHotelName] = useState("");
  var [hotelPlace, setHotelPlace] = useState("");
  var [hotelExtra, setHotelExtra] = useState("");
  var [hotelDescription, setHotelDescription] = useState("");
  const [message, setMessage] = useState("");
  const [destinationList, setDestinationList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/destinations")
      .then((data) => data.json())
      .then((data) => {
        setDestinationList(data);
      });
  }, []);


  function addHotelBack(hotel) {
    fetch("http://localhost:4000/destinations", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "auth-token" : `${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify(hotel),
    })
      .then((data) => data.json())
      .then((data) => {
        setMessage(data);
      })
      .catch((e) => {
        console.log("Hubo un error");
      });
  }

  function modHotelBack(hotel) {
    fetch("http://localhost:4000/destinations", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "auth-token" : `${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify(hotel),
    })
      .then((data) => data.json())
      .then((data) => {
        setMessage(data);
      })
      .catch((e) => {
        console.log("Hubo un error");
      });
  }

  function delHotelBack(hotel) {
    fetch("http://localhost:4000/destinations", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "auth-token" : `${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify(hotel),
    })
      .then((data) => data.json())
      .then((data) => {
        setMessage(data);
      })
      .catch((e) => {
        console.log("Hubo un error");
      });
  }

  const manageHotel = () => {
    if (hotelId === "" || hotelId === "none") {
      setMessage({message: "Debes elegir un hotel..."})
    }else{
      if (hotelAction === "Agregar") {
        addHotelBack({
          hotelName: hotelName,
          hotelPlace: hotelPlace,
          hotelExtra: hotelExtra,
          hotelDescription: hotelDescription,
        });
      } else if (hotelAction === "Modificar") {
        modHotelBack({
          hotelId: hotelId,
          hotelPlace: hotelPlace,
          hotelExtra: hotelExtra,
          hotelDescription: hotelDescription,
        });      
      } else if (hotelAction === "Eliminar") {
        delHotelBack({hotelId:hotelId})
      }
    }
  };

  function displayForm() {
    if (hotelAction === "Agregar") {
      return (
        <form>
          <label>Hotel:</label>
          <br />
          <input
            type="text"
            id="hotelName"
            placeholder="Escribe el nombre del nuevo hotel"
            required="true"
            value={hotelName}
            name="hotelName"
            onChange={(event) => setHotelName(event.target.value)}
          />
          <br />

          <label>Lugar:</label>
          <br />
          <input
            type="text"
            id="hotelPlace"
            placeholder="Departamento / Ciudad del hotel"
            required="true"
            value={hotelPlace}
            name="hotelPlace"
            onChange={(event) => setHotelPlace(event.target.value)}
          />
          <br />

          <label>Servicios incluidos:</label>
          <br />
          <input
            type="text"
            id="hotelExtra"
            placeholder="Desayuno incluido / Limpieza / etc"
            required="true"
            value={hotelExtra}
            name="hotelExtra"
            onChange={(event) => setHotelExtra(event.target.value)}
          />
          <br />

          <label>Descripción del hotel:</label>
          <br />
          <input
            type="text"
            id="hotelDesc"
            placeholder="Cuentanos como es el hotal"
            required="true"
            value={hotelDescription}
            name="hotelDescription"
            onChange={(event) => setHotelDescription(event.target.value)}
          />
        </form>
      );
    } else if (hotelAction === "Modificar") {
      return (
        <form>
          <label>Seleccionar hotel:</label>

          <select
            type="text"
            id="hotelId"
            required="true"
            value={hotelId}
            name="hotelAction"
            onChange={(event) => setHotelaId(event.target.value)}
          >
            <option value="none">Elije un hotel</option>;
            {destinationList.map((value) => {
              return <option value={value.id}>{value.name}</option>;
            })}
          </select>
          <br />
          <br />

          <div>
            {destinationList.map((value) => {
              if (value.id === hotelId) {
                return (
                  <div>
                    ----------------------------------------------
                    <br />
                    <b>Datos actuales: </b>
                    <br />
                    <br />
                    <b>Nombre:</b> {value.name} <br />
                    <br />
                    <b>Lugar:</b> {value.place} <br />
                    <br />
                    <b>Servicios:</b> {value.extra} <br />
                    <br />
                    <b>Descripción:</b> {value.description} <br />
                    ----------------------------------------------
                  </div>
                );
              }
            return ("")
            }
            )}
          </div>
          <br />

          <div>
            <b>Nuevos valores:</b>{" "}
          </div>
          <br />

          <label>Lugar:</label>
          <br />
          <input
            type="text"
            id="hotelPlace"
            placeholder="Departamento / Ciudad del hotel"
            required="true"
            value={hotelPlace}
            name="hotelPlace"
            onChange={(event) => setHotelPlace(event.target.value)}
          />
          <br />

          <label>Servicios incluidos:</label>
          <br />
          <input
            type="text"
            id="hotelExtra"
            placeholder="Desayuno incluido / Limpieza / etc"
            required="true"
            value={hotelExtra}
            name="hotelExtra"
            onChange={(event) => setHotelExtra(event.target.value)}
          />
          <br />

          <label>Descripción del hotel:</label>
          <br />
          <input
            type="text"
            id="hotelDesc"
            placeholder="Cuentanos como es el hotal"
            required="true"
            value={hotelDescription}
            name="hotelDescription"
            onChange={(event) => setHotelDescription(event.target.value)}
          />
        </form>
      );
    } else {
      return (
        <form>
          <label>Seleccionar hotel:</label>

          <select
            type="text"
            id="hotelId"
            required="true"
            value={hotelId}
            name="hotelAction"
            onChange={(event) => setHotelaId(event.target.value)}
          >
            <option value="none">Elije un hotel</option>;
            {destinationList.map((value) => {
              return <option value={value.id}>{value.name}</option>;
            })}
          </select>

          <div>
            {destinationList.map((value) => {
              if (value.id === hotelId) {
                return (
                  <div>
                    ----------------------------------------------
                    <br />
                    <b>Datos actuales: </b>
                    <br />
                    <br />
                    <b>Nombre:</b> {value.name} <br />
                    <br />
                    <b>Lugar:</b> {value.place} <br />
                    <br />
                    <b>Servicios:</b> {value.extra} <br />
                    <br />
                    <b>Descripción:</b> {value.description} <br />
                    ----------------------------------------------
                  </div>
                );
              }
            return ("")
            }
            )}
          </div>

        </form>
      );
    }
  }

  return (
    <div className="contenedor">
      <h2>Agregar | modificar | borrar HOTEL</h2>
      <form action="javascript:void(0);">
        <fieldset className="elemento">
          <label>Acción:</label>

          <select
            type="text"
            id="Acción"
            required="true"
            value={hotelAction}
            name="hotelAction"
            onChange={(event) => setHotelaAction(event.target.value)}
          >
            <option value="Agregar" selected="selected">
              {" "}
              Agregar un nuevo hotel{" "}
            </option>
            <option value="Modificar">Modificar hotel existente</option>
            <option value="Eliminar">Eliminar hotel existente</option>
          </select>
          <br />
          <br />
          {displayForm()}
          <input type="submit" value={hotelAction} onClick={manageHotel} />
        </fieldset>
      </form>
      <div>{message.message}</div>
    </div>
  );
};

export default ManageHotel;
