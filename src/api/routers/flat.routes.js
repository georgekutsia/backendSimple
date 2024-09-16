const express = require('express');
const flatRoutes = express.Router();
const upload =  require("../middleware/upload.js");
const {addFlat} = require("../contollers/flat.controller.js");


flatRoutes.post("/",  addFlat);


module.exports = flatRoutes