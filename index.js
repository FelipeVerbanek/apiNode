const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')
//Iniciando App
var app = express();
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://deploy:upload@cluster0-bxjdr.mongodb.net/Produtos?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models')


const Product = mongoose.model('Product')

app.use('/api',require('./src/routes'))


app.listen(3001);


