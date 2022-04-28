const sequelize = require("../dbInfra/db.js");
const {DataTypes, Model} = require ("sequelize")

class Destinations extends Model {}

Destinations.init({
    id: {
        type:DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
    },
    name: {
        type:DataTypes.STRING
    },
    place: {
        type:DataTypes.STRING
    },
    extra: {
        type:DataTypes.STRING
    },
    description: {
        type:DataTypes.STRING
    },
    img:{
        type:DataTypes.STRING
    }
},
{
    sequelize,
    modelName: "Hotel",
    createdAt: false,
    updatedAt: false,
    tableName: "hotel"
}
)



module.exports = Destinations;