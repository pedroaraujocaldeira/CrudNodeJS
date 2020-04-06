require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// docker
// init docker "docker start <name>"
// show all docker "docker ps -a"

// Iniciando o App
const app = express() 
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(process.env.MONGO_URL);
requireDir('./src/models');

// Rotas
app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3001);