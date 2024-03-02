const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const produtoController = require('../controllers/produtoController');
const pedidoController = require('../controllers/pedidoController');
const verificaToken = require('../controllers/verficaToken')
const routes = express.Router();

// Login
routes.post('/login', usuarioController.login); 

//Controllers usuario
routes.get('/users/:id', usuarioController.listarId) // Listar usuario especifico
routes.get('/users', usuarioController.listar); // Listar usuários
routes.post('/users', usuarioController.criar); // Criar usuários
routes.put('/users/:id', usuarioController.atualizar); // Atualizar usuários
routes.delete('/users/:id', usuarioController.remover); // remover usuários

//Controllers produtos
routes.get('/produtos', produtoController.listar) // Listar
routes.post('/produtos', produtoController.criar) // Criar produtos

//Controllers pedidos
routes.get('/pedidos', pedidoController.listar);
routes.post('/pedidos', pedidoController.criar);


module.exports = routes;