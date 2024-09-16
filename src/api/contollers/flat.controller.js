const Flat = require("../models/flat.model.js");

const addFlat = async (req, res) => {
  console.log(req.body)
    try {
        const newFlat = new Flat(req.body);
        // newFlat.images = []; 
        
        // if (req.files && req.files.images && req.files.images.length > 0) {
        //     for (let i = 0; i < req.files.images.length; i++) {
        //         console.log(req.files.images[i].path);
        //         newFlat.images = [...newFlat.images, req.files.images[i].path];
        //     }
        // }
        
        const created = await newFlat.save();
        res.status(200).json(created);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el flat", error });
    }
}

module.exports = { addFlat };
