const mongoose = require("mongoose");
const Karyawan = require("./Karyawan");

const kehadiranSchema = new mongoose.Schema(
  {
    waktu_kehadiran: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    status_kehadiran: {
      type: String, // [Hadir, Izin, Sakit, Tanpa Keterangan]
      required: true,
    },
    id_karyawan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Karyawan,
      required: true,
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Kehadiran", kehadiranSchema);
