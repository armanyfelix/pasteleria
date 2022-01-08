const Pasteles = require('../models/pasteles');

const getPasteles = async (req, res) => {
  try {
    const pasteles = await Pasteles.find();
    res.json(pasteles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener pasteles' });
  }
}

const getPastel = async (req, res) => {
  try {
    const pastel = await Pasteles.findById(req.params.id);
    res.json(pastel);
  } catch { error } {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener pastel' });
  }
}

module.exports = {
  getPasteles,
  getPastel,
}


