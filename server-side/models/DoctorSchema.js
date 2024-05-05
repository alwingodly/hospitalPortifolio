const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    SL: { type: Number, required: true },
    NAME: { type: String, required: true },
    GENDER: { type: String, enum: ['MALE', 'FEMALE', 'OTHER'], required: true },
    DEPARTMENT: { type: String, required: true },
    DEPT_ID: { type: Number, required: true },
    DESIGNATION: { type: String, required: true },
    QUALIFICATIONS: { type: [String], required: true },
    EXPERTISE: { type: String, default: '' },
    ACHIEVEMENTS: { type: [String], default: [] }, // Representing as an array
    OP_TIMINGS: [{ type: String, required: true }],
    KNOWN_LANGUAGES: [{ type: String, required: true }],
    PHOTO_PATH: { type: String }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
