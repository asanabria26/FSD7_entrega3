require ('dotenv') .config();
const sequelize = require("./dbInfra/db.js");
const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors')
const destinosRoutes = require('./destinations/routes')
const ofertasRoutes = require('./offers/routes')
const vehiculosRoutes = require('./vehicles/routes')
const loadDB = require ('./dbinfra/initialize')
const authRouter = require('./destinations/routes')

const app = express();
app.use(cors())


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //Cuando reciba algun tipo de dato en un peticion la convierto en json, en cada petion

app.use('/auth', authRouter);
app.use('/destinations',destinosRoutes);
app.use('/offerts',ofertasRoutes);
app.use('/vehicles',vehiculosRoutes);




app.listen(4000, async()=>{
    await sequelize.sync({force:true})
    loadDB();
});

