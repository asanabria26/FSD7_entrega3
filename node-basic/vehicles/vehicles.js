const sequelize = require("../dbInfra/db.js");
const {DataTypes, Model} = require ("sequelize")

class Vehicles extends Model {}

Vehicles.init({
    id: {
        type:DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
    },
    img:{
        type:DataTypes.STRING
    },
    name: {
        type:DataTypes.STRING
    },
    price: {
        type:DataTypes.STRING
    }
},
{
    sequelize,
    modelName: "Vehicle",
    createdAt: false,
    updatedAt: false,
    tableName: "vehicles"
}
)

module.exports = Vehicles;