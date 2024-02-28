const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const routes = express.Router();

//Controllers


routes.get('/', usuarioController.listar);
routes.post('/', usuarioController.criar);
routes.put('/:id', usuarioController.atualizar);
routes.delete('/:id', usuarioController.remover);

module.exports = routes;