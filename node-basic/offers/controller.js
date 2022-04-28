const Offerts = require("./offers")

async function listOfferts(req, res) {
    res.send(await Offerts.findAll());
};

module.exports = { listOfferts }