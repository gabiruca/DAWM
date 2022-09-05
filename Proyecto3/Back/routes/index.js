var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Categorias = require('../models').categorias;
const Dificultades = require('../models').dificultades;
const Paises = require('../models').paises;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Back' });
});

router.get('/categorias', async function(req, res, next) {
  const categorias= await Categorias.findAll({attributes:{exclude:['id']}})
  res.send(categorias)
});

router.get('/dificultades', async function(req, res, next) {
  const dificultades= await Dificultades.findAll({attributes:{exclude:['id']}})
  res.send(dificultades)
});
router.get('/paises', async function(req, res, next) {
  const paises= await Paises.findAll({attributes:{exclude:['id']}})
  res.send(paises)
});
module.exports = router;
