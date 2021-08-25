require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const documentation = require("../swagger.json");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Section
const routeKaryawan = require("./routers/KaryawanRoutes");
const routeKehadiran = require("./routers/KehadiranRoutes");

app.use("/", routeKaryawan);
app.use("/", routeKehadiran);

// MongoDB Connection Section
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const DB = process.env.DB_NAME;

const db =
  "mongodb://" +
  USER +
  ":" +
  PASS +
  "@cluster0-shard-00-00.oufx0.mongodb.net:27017,cluster0-shard-00-01.oufx0.mongodb.net:27017,cluster0-shard-00-02.oufx0.mongodb.net:27017/" +
  DB +
  "?ssl=true&replicaSet=atlas-8du56l-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});

// Swagger Section
app.use("/api-documentation", swaggerUi.serve, swaggerUi.setup(documentation));

module.exports = app;
