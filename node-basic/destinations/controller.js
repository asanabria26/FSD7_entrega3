const { response } = require("express");
const Destinations = require("./destination")

async function addDestination(req, res) {
    const hotelName = req.body.hotelName.trim();
    const hotelPlace = req.body.hotelPlace.trim();
    const hotelExtra = req.body.hotelExtra.trim();
    const hotelDescription = req.body.hotelDescription.trim();


    if (hotelName.length < 4) {
        res.status(520);
        res.send({ message: "ERROR: El nombre debe tener al menos 4 caracteres..." })
    } else if (hotelPlace.length < 4) {
        res.status(521);
        res.send({ message: "ERROR: El lugar debe tener al menos 4 caracteres..." })
    } else if (hotelExtra === "") {
        res.status(522);
        res.send({ message: "ERROR: Si no incluye servicios, poner: NO INCLUYE" })
    } else if (hotelDescription === "") {
        res.status(523);
        res.send({ message: "ERROR: La descripción debe contener info del hotel" })
    } else {
        res.status(201);
        res.send({ respuesta: await Destinations.create({ name: hotelName, place: hotelPlace, extra: hotelExtra, description: hotelDescription, img: "./img/oceanoHotel.jpeg" }), message: "Exito: El hotel fue cargado con exito" })
    }
};

async function listDestination(req, res) {
    res.send(await Destinations.findAll());
};

async function modifyDestination(req, res) {

    const hotelId = req.body.hotelId;
    const hotelPlace = req.body.hotelPlace.trim();
    const hotelExtra = req.body.hotelExtra.trim();
    const hotelDescription = req.body.hotelDescription.trim();

    let hotel = await Destinations.findByPk(hotelId)

    if (hotel == null) {
        res.status(515).send("El hotel no es valido, verificar")
    } else {
        if (hotelPlace.length < 4) {
            res.status(521);
            res.send({ message: "ERROR: El lugar debe tener al menos 4 caracteres..." })
        } else if (hotelExtra === "") {
            res.status(522);
            res.send({ message: "ERROR: Si no incluye servicios, poner: NO INCLUYE" })
        } else if (hotelDescription === "") {
            res.status(523);
            res.send({ message: "ERROR: La descripción debe contener info del hotel" })
        } else {
            hotel.place = hotelPlace
            hotel.extra = hotelExtra
            hotel.description = hotelDescription
            res.status(201)
            res.send({ respuesta: await Destinations.update({ place: hotel.place, extra: hotel.extra, description: hotel.description }, { where: { id: hotel.id } }), message: "Actualizacion exitosa..." })
        }
    }
};

async function deleteDestination(req, res) {

    const hotelId = req.body.hotelId;

    let hotel = await Destinations.findByPk(hotelId)

    if (hotel == null) {
        res.status(515).send("El hotel no es valido, verificar")
    } else {
        res.status(201)
        res.send({ respuesta: await Destinations.destroy({ where: { id: hotel.id } }), message: "Eliminación exitosa..." })
    }
};

module.exports = { addDestination, listDestination, modifyDestination, deleteDestination }