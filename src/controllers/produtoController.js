const Produto = require('../models/Produto');
const User = require('../models/User');

const produtoController = {
  async listar(req, res) {
    try {
      const produtos = await Produto.find().populate('usuario', '-senha');
      
      res.status(201).send({ produtos });
    } catch (error) {
      console.log(error);
      res.status(400).send(`Falha ao listar produtos!`);
    }
  },

  async criar(req, res) {
    try {
      const { nome, quantidade, preco, descricao, usuario } = req.body; 
      const user = await User.findById(usuario); //Busca usuario no banco

      // verifica se usuario existe
      if(!user){
        res.status(400).json('Usuário não encontrado!');
        return
      }
      // cria produto
      const produto = await Produto.create({ nome, quantidade, preco, descricao, usuario });

      res.status(201).send(`Produto cadastrado com sucesso!\n${produto}`);
      
    } catch (error) {
      console.log(error);
      res.status(400).json(`Usuário inválido`);
    }
  }

}

module.exports = produtoController;