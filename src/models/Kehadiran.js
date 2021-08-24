const mongoose = require("mongoose");
const Karyawan = require("./Kehadiran");

const kehadiranSchema = new mongoose.Schema(
  {
    waktuKehadiran: {
      type: Date,
      required: true,
    },
    statusKehadiran: {
      type: String, // [Hadir, Izin, Sakit, Tanpa Keterangan]
      required: true,
    },
    idKaryawan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Karyawan,
      required: true,
    },
  },
  { timestamps: { createdAt: "waktuKehadiran" } }
);

module.exports = mongoose.model("Kehadiran", kehadiranSchema);
