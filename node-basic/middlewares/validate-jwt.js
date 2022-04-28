const express = require('express');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = 'UnaClaveCualquieraBienPiola'
const router = express.Router();


const verifyToken = (req, res, next)=>{
    const token = req.header('auth-token')
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado, inicia sesion'})
    } else {
        try {
            const veryfied = jwt.verify(token, TOKEN_SECRET)
            req.user = veryfied
            next()
        } catch (error) {
            return res.status(401).json({ message: 'Acceso denegado, inicia sesion'})
        }
    }
}

module.exports = {verifyToken, TOKEN_SECRET}