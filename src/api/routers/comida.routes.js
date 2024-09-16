const express = require('express');
const {getComidas, postComidas,putComidas,deleteComidas,getOneComida} = require("../contollers/comida.controller")
const {isAuth} = require("../middleware/auth");
const comidaRoutes = express.Router();

comidaRoutes.get("/", isAuth,  getComidas)
comidaRoutes.get("/:id",isAuth, getOneComida)
comidaRoutes.post("/", postComidas)
comidaRoutes.put("/:id", putComidas)
comidaRoutes.delete("/:id", deleteComidas)

module.exports = comidaRoutes; 