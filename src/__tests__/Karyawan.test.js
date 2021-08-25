const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);
const mongoose = require("mongoose");
const Karyawan = mongoose.model("Karyawan");

let data_karyawan = [
  {
    nama: "Adi Wijaya",
  },
  {
    nama: "Budi Doremi",
  },
  {
    nama: "Charles Wijaya",
  },
  {
    nama: "Delima Wilema",
  },
  {
    nama: "Eric Fransiskus",
  },
];

describe("Creating karyawan data testing", () => {
  test("Should return created karyawan data", (done) => {
    request
      .post(`/create-akun`)
      .set("Content-Type", "application/json")
      .send(JSON.stringify(data_karyawan))
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.data.length == data_karyawan.length).toBeTruthy();
        done();
      });
  });
});

afterAll((done) => {
  Karyawan.deleteMany({}, (err, docs) => {
    if (err) {
      console.log(err);
    }
  });
  done();
});
