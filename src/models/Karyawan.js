const mongoose = require("mongoose");

const karyawanSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Karyawan", karyawanSchema);
