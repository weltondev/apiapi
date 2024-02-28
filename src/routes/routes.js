const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const routes = express.Router();

//Controllers


routes.get('/users', usuarioController.listar);
routes.post('/users', usuarioController.criar);
routes.put('/users/:id', usuarioController.atualizar);
routes.delete('/users/:id', usuarioController.remover);

module.exports = routes;