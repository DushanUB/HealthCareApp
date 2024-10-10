const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  specialization: { type: String, required: true },
  associatedHospitals: { type: [String], required: true },
  degree: { type: String, required: true },
  university: { type: String, required: true },
  doctorImage: { type: String, required: true }, // URL of the uploaded image
  medicalLicense: { type: String, required: true } // URL of the uploaded PDF
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
