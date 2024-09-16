const Comida = require("../models/comida.model")

const getComidas = async(req, res) =>{
  try {
    const allComidas = await Comida.find();
    return res.status(200).json(allComidas)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const getOneComida = async(req, res) =>{
try {
  const {id} = req.params;

  const oneComida = await Comida.findById(id);
  return res.status(200).json(oneComida)
} catch (error) {
  return res.status(500).json(error)
}
}


const postComidas = async(req, res) =>{
  try {
    const newComida = new Comida(req.body);
    const createdComida = await newComida.save();
    return res.status(201).json(createdComida)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const putComidas = async(req, res) =>{
try {
  const {id} = req.params;
  const putComida = new Comida(req.body);
  putComida._id = id;
  const updatedComida = await Comida.findByIdAndUpdate(id, putComida,{new:true})
  if(!updatedComida){
    return res.status(404).json({message: "no existe este id de comida"})
  }
  return res.status(200). json(updatedComida);
} catch (error) {
  return res.status(500).json(error)
}
}
const deleteComidas = async(req, res) =>{
  try {
    const {id} = req.params;
    const deletedComida = await Comida.findByIdAndDelete(id)
    if(!deletedComida){
      return res.status(404).json({message: "no existe este"})
    }
    return res.status(200).json(deletedComida)
  } catch (error) {
  return res.status(500).json(error)
    
  }
}


module.exports = {getComidas, postComidas, putComidas,deleteComidas, getOneComida}