const express = require("express");
const router = express.Router();
const karyawanCtrlr = require("../controllers/KaryawanController");

// Membuat n - karyawan
router.post("/create-akun", karyawanCtrlr.createKaryawan);

module.exports = router;
