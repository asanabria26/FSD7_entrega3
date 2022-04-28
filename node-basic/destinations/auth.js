const express = require('express');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');
const { verifyToken, TOKEN_SECRET } = require('../middlewares/validate-jwt');
const router = express.Router();
const User = require("../users/users")
const { QueryTypes } = require('sequelize');
const { json } = require('express/lib/response');
const { user } = require('pg/lib/defaults');

const usuarios = [];

async function addUser (req, res) {
    const user =(await User.findOne({ where: {mail: req.body.mail}}));
    if (user) {
        return res.status(403).json({message: "Usuario existente"})
    } else {
        if ((req.body.name).length < 4) {
            return res.status(403).json({message: "Nombre debe contener al menos 3 caracteres"})
            
        } else if ((req.body.mail).length < 10) {
            return res.status(403).json({message: "Email NO valido"})
        } else if ((req.body.password).length < 5){
            return res.status(403).json({message: "La contraseña debe contener al menos 5 caracteres"})
        } else {
            const salt = await bcrypt.genSalt(10);
            const password = await bcrypt.hash(req.body.password, salt);
        
            const newUser = {
                name: req.body.name,
                mail: req.body.mail,
                password: password
            }
            res.json({respuesta: await User.create(newUser), success: true, newUser, message: "Registro con exito"}); 
        }
    }

};

async function logInUser (req, res) {
    const user =(await User.findOne({ where: {mail: req.body.mail}}));

    if (!user) {
        return res.status(403).json({message: "Usuario no encontrado"})
    } else {
        const validPAssword = await bcrypt.compare(req.body.password, user.password)
        if (!validPAssword) {
            return res.status(400).json({ message: "Usuario / contraseña no válida"})
        } else {
            const token = jwt.sign({
                name: user.name,
                id: user.id,
            }, TOKEN_SECRET);
            return res.json({error: null, message: 'Login exitoso', token});
        }
    }
};


module.exports = { addUser, logInUser }