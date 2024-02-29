const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const verificaToken = require('../controllers/verficaToken')
const routes = express.Router();

//Controllers
routes.post('/login', usuarioController.login); // Login

routes.get('/users', usuarioController.listar); // Listar usuários
routes.post('/users', usuarioController.criar); // Criar usuários
routes.put('/users/:id', usuarioController.atualizar); // Atualizar usuários
routes.delete('/users/:id', usuarioController.remover); // remover usuários

module.exports = routes;