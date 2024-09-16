const express  = require('express')
const {getRestaurantes, postRestaurante, putRestaurante, deleteRestaurante} = require("../contollers/restaurante.controller")

const restauranteRoutes = express.Router()

restauranteRoutes.get("/", getRestaurantes)
restauranteRoutes.post("/", postRestaurante)
restauranteRoutes.put("/:id", putRestaurante)
restauranteRoutes.delete("/:id", deleteRestaurante)


module.exports = restauranteRoutes