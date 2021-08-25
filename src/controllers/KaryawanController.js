const Karyawan = require("../models/Karyawan");

const createKaryawan = (req, res) => {
  Karyawan.insertMany(req.body)
    .then((result) => {
      res.json({
        status: true,
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        status: false,
        error: err,
      });
    });
};

module.exports = { createKaryawan };
