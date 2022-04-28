const sequelize = require("../dbInfra/db.js");
const {DataTypes, Model} = require ("sequelize")

class Offerts extends Model {}

Offerts.init({
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
    place: {
        type:DataTypes.STRING
    },
    extra: {
        type:DataTypes.STRING
    },
    price: {
        type:DataTypes.STRING
    }
},
{
    sequelize,
    modelName: "Offert",
    createdAt: false,
    updatedAt: false,
    tableName: "offerts"
}
)

module.exports = Offerts;