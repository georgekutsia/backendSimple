const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors")
const { connect } = require("./src/utils/db");
const cloudinary = require("cloudinary").v2;
// const userRoutes = require("./src/api/routers/user.routes");
const comidaRoutes = require("./src/api/routers/comida.routes");
const restaurantesRoute = require("./src/api/routers/restaurante.routes");
const userRoutes = require("./src/api/routers/user.routes");
const flatRoutes = require("./src/api/routers/flat.routes")

const PORT = process.env.PORT || 3450;
const app = express();  
connect();
app.use(cors());
app.use(express.json());
cloudinary. config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true})


// app.use("/user", userRoutes);
app.use("/user", userRoutes);
app.use("/comidas", comidaRoutes);
app.use("/restaurantes", restaurantesRoute)
app.use("/flat", flatRoutes)
// app.use("/user", userRoutes)




app.listen(PORT, () => console.log(`activado en el puerto ${PORT}`));
