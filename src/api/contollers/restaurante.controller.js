const Restaurante = require("../models/restaurante.model")



const getRestaurantes = async (reg, res) => {
  try {
const allRestaurantes = await Restaurante.find().populate("carta");
return res.status(200).json(allRestaurantes);
} catch (error) {
  return res.status(500).json(error)
}
}
const postRestaurante = async (req, res) => {
  try {
const newRestaurante = await Restaurante(req.body);
const createdRestaurante = await newRestaurante.save()
return res.status(200).json(createdRestaurante);
} catch (error) {
  return res.status(500).json(error)
}


}


const putRestaurante = async(req, res) =>{
  try {
    const {id} = req.params;
    const putRestaurante = new Restaurante(req.body);
    putRestaurante._id = id;
    const updateRestaurante = await Restaurante.findByIdAndUpdate(id, putRestaurante,{new:true})
    if(!updateRestaurante){
      return res.status(404).json({message: "no existe este id de comida"})
    }
    return res.status(200). json(updateRestaurante);
  } catch (error) {
    return res.status(500).json(error)
  }
  }
  const deleteRestaurante = async(req, res) =>{
    try {
      const {id} = req.params;
      const deletedRestaurante = await Restaurante.findByIdAndDelete(id)
      if(!deletedRestaurante){
        return res.status(404).json({message: "no existe este"})
      }
      return res.status(200).json(deletedRestaurante)
    } catch (error) {
    return res.status(500).json(error)
      
    }
  }

module.exports = {getRestaurantes, postRestaurante, putRestaurante, deleteRestaurante} 