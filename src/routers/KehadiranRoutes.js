const express = require("express");
const router = express.Router();
const KehadiranCtrlr = require("../controllers/KehadiranController");
const LaporanCtrlr = require("../controllers/LaporanController");

// Membuat kehadiran
router.post("/kehadiran", KehadiranCtrlr.createKehadiran);

// Mengsunting kehadiran
router.put("/kehadiran/:id", KehadiranCtrlr.editKehadiran);

// Menghapus kehadiran
router.delete("/kehadiran/hapus/:id", KehadiranCtrlr.deleteKehadiran);

// Melihat status kehadiran karyawan
router.get("/laporan", LaporanCtrlr.getLaporanKaryawan);

module.exports = router;
