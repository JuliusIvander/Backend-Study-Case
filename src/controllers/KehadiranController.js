const Kehadiran = require("../models/Kehadiran");

const createKehadiran = (req, res) => {
  let kehadiran = new Kehadiran({
    waktu_kehadiran: Date.now(),
    status_kehadiran: req.body.status_kehadiran,
    id_karyawan: req.body.id_karyawan,
  });

  kehadiran
    .save()
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

const editKehadiran = (req, res) => {
  id = req.params.id;

  Kehadiran.findOneAndUpdate(
    { _id: id },
    {
      waktu_kehadiran: Date.now(),
      status_kehadiran: req.body.status_kehadiran,
    }
  )
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

const deleteKehadiran = (req, res) => {
  id = req.params.id;

  Kehadiran.findByIdAndDelete(id)
    .then(() => {
      res.json({
        status: true,
        message: "Data telah dihapus!",
      });
    })
    .catch((err) => {
      res.json({
        status: false,
        error: err,
      });
    });
};

module.exports = { createKehadiran, editKehadiran, deleteKehadiran };
