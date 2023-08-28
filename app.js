require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { AppDataSource } = require("./src/models/dataSource");
const { router } = require("./src/routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
app.use(router);

app.get("/ping", (req, res, next) => {
  res.status(200).json({ message: "pong" });
});

const startServer = async () => {
  const PORT = process.env.PORT;

  await AppDataSource.initialize();

  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();
