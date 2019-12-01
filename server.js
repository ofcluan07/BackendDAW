const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
    'mongodb://daw:faeterj2019@projetodaw-shard-00-00-a0cth.mongodb.net:27017,projetodaw-shard-00-01-a0cth.mongodb.net:27017,projetodaw-shard-00-02-a0cth.mongodb.net:27017/test?ssl=true&replicaSet=ProjetoDAW-shard-0&authSource=admin&retryWrites=true&w=majority',
    { useNewUrlParser: true }); 
requireDir('./src/models');

//Rotas 
app.use('/api', require('./src/routes'));

app.listen(3001);