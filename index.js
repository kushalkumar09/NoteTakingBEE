import { configDotenv } from "dotenv";
import express from "express";
import dbConnect from "./backend/config/database.js";
import createUser from "./backend/routes/createU.js";
import createNote from "./backend/controllers/note.controller.js";
import cors from 'cors'
var app = express();

app.use(cors());
configDotenv();
dbConnect();

const Port = process.env.PORT || 8000;
// const connectDb = require("./backend/config/database");

// middlewre
app.use(express.json()); // body-parser

//import routes and mount
app.use("/api/v1", createUser);
app.use("/api/v1", createNote);


// default route
app.get("/", (req, res) => {
  res.send("<h1>home page </h1>");
});

app.listen(Port, () => {
  console.log(`app is listning at port http://127.0.0.1:${Port}`);
});
