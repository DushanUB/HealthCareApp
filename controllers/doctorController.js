const Doctor = require('../models/doctorModel');

// Controller for registering a new doctor
const registerDoctor = async (req, res) => {
  const {
    fullName,
    phoneNumber,
    address,
    specialization,
    associatedHospitals,
    degree,
    university,
    doctorImage,
    medicalLicense
  } = req.body;

  try {
    const newDoctor = new Doctor({
      fullName,
      phoneNumber,
      address,
      specialization,
      associatedHospitals,
      degree,
      university,
      doctorImage,
      medicalLicense
    });

    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (error) {
    res.status(500).json({ message: 'Error registering doctor', error });
  }
};

module.exports = {
  registerDoctor,
};
