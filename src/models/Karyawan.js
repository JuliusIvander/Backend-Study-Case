const mongoose = require("mongoose");

const karyawanSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Karyawan", karyawanSchema);
