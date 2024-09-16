const express  = require('express')
const {register, login, logout} = require("../contollers/user.controller")

const userRoutes = express.Router()

userRoutes.post("/register", register)
userRoutes.post("/login", login)
userRoutes.post("/logout", logout)

// userRoutes.put("/:id", putUser)
// userRoutes.delete("/:id", deleteUser)


module.exports = userRoutes