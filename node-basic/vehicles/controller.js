const Vehicles = require("./vehicles")

async function listVehicles(req, res) {
    res.send(await Vehicles.findAll());
};

module.exports = { listVehicles }