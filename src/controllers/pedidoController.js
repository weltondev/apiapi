const Pedido = require('../models/Pedido');

const pedidoController = {
  async listar(req, res) {
    try {
      const pedidos = await Pedido.find().populate(["usuario","produto"]);

      res.status(200).send({ pedidos });
    } catch (error) {
      console.log(error.message);
      res.status(400).send('Falha ao listar pedidos!');
    }
  },

  async criar(req, res) {
    try {
      const { usuario, produto } = req.body;
      const pedido = await Pedido.create({ usuario, produto });

      res.status(201).send(`Pedido cadastrado com sucesso!`);
      
    } catch (error) {
      console.log(error);
      res.status(400).send('Falha ao cadastrar pedido!');
    }
  }
}

module.exports = pedidoController;