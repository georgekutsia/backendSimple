const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Comida =  require("../api/models/comida.model")

const arrayComidas = [
  {
      "nombre": "Hamburguesa",
      "pais": "EEUU",
      "foto": "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg"
  },
  {
      "nombre": "Cuscús",
      "pais": "Marruecos",
      "foto": "https://media.istockphoto.com/id/500753068/es/foto/cusc%C3%BAs-con-tomates-y-albahaca.jpg"
  },
  {
      "nombre": "Tacos",
      "pais": "México",
      "foto": "https://media.istockphoto.com/id/50323412/es/foto/tacos-de-carne-con-verduras.jpg"
  },
  {
      "nombre": "Sashimi",
      "pais": "Japón",
      "foto": "https://media.istockphoto.com/id/682074172/es/foto/sushi-y-sashimi.jpg"
  },
  {
      "nombre": "Pizza",
      "pais": "Italia",
      "foto": "https://media.istockphoto.com/id/1145917177/es/foto/pizza-con-queso-mozzarella.jpg"
  },
  {
      "nombre": "Croissant",
      "pais": "Francia",
      "foto": "https://media.istockphoto.com/id/1078370868/es/foto/croissant-franc%C3%A9s.jpg"
  },
  {
      "nombre": "Paella",
      "pais": "España",
      "foto": "https://media.istockphoto.com/id/488629996/es/foto/paella-espa%C3%B1ola.jpg"
  },
  {
      "nombre": "Kebab",
      "pais": "Turquía",
      "foto": "https://media.istockphoto.com/id/182806594/es/foto/shawarma-d%C3%B6ner-kebab.jpg"
  },
  {
      "nombre": "Bratwurst",
      "pais": "Alemania",
      "foto": "https://media.istockphoto.com/id/485268352/es/foto/salchicha-alemana-bratwurst.jpg"
  },
  {
      "nombre": "Pad Thai",
      "pais": "Tailandia",
      "foto": "https://media.istockphoto.com/id/1192754294/es/foto/pad-thai-de-langostinos.jpg"
  }
];

const DB_URL = process.env.DB_URL;
console.log(DB_URL)

mongoose.connect(DB_URL).then(async()=>{
  // se podría comprobar si hay coleccion y borrarlo, pero nos ahorramos ese paso
  const allComidas = await Comida.find();
  if (allComidas. length > 0) {
    await Comida.collection.drop(); 
    console.log("comidas creadas")
  }
})
.catch((error)=> console. log ("error borrando las comidas" , error))
.then (async ( )=> {
const comidaMap = arrayComidas.map ((comida) => new Comida (comida));
await Comida.insertMany(comidaMap);
console.log("comidas insertadas correctamente")
})
.catch((error)=> console.log("error insertando comidas", error))
.finally(()=>mongoose.disconnect());