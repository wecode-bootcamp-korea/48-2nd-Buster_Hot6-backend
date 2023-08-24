require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { dataSource } = require("./src/models/dataSource");


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));


app.get("/ping", (req, res, next) => {
  res.status(200).json({ message: "pong" });
});

const startServer = async () => {
  const PORT = process.env.PORT;

  await dataSource.initialize();

  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();