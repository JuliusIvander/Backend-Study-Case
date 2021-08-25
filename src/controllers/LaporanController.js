const Karyawan = require("../models/Karyawan");

const getLaporanKaryawan = (req, res) => {
  Karyawan.aggregate([
    {
      $lookup: {
        from: "kehadirans",
        localField: "_id",
        foreignField: "id_karyawan",
        as: "log_kehadiran",
      },
    },
    {
      $unwind: "$log_kehadiran",
    },
    {
      $group: {
        _id: { id_karyawan: "$_id", nama: "$nama" },
        Hadir: {
          $sum: {
            $cond: {
              if: { $eq: ["$log_kehadiran.status_kehadiran", "Hadir"] },
              then: 1,
              else: 0,
            },
          },
        },
        Sakit: {
          $sum: {
            $cond: {
              if: { $eq: ["$log_kehadiran.status_kehadiran", "Sakit"] },
              then: 1,
              else: 0,
            },
          },
        },
        Izin: {
          $sum: {
            $cond: {
              if: { $eq: ["$log_kehadiran.status_kehadiran", "Izin"] },
              then: 1,
              else: 0,
            },
          },
        },
        Tanpa_Keterangan: {
          $sum: {
            $cond: {
              if: {
                $eq: ["$log_kehadiran.status_kehadiran", "Tanpa Keterangan"],
              },
              then: 1,
              else: 0,
            },
          },
        },
      },
    },
  ])
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

module.exports = { getLaporanKaryawan };
