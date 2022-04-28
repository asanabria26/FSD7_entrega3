const sequelize = require("../dbInfra/db.js");
const {DataTypes, Model} = require ("sequelize")

class Users extends Model {}

Users.init({
    id: {
        type:DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    mail: {
        type:DataTypes.STRING
    },
    password: {
        type:DataTypes.STRING
    }
},
{
    sequelize,
    modelName: "Users",
    createdAt: false,
    updatedAt: false,
    tableName: "users"
}
)

module.exports = Users;