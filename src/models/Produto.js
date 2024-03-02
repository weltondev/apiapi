const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  quantidade: {
    type: Number,
    required: true
  },
  descricao: {
    type: String,
  },
  preco: {
    type: Number,
    required: true
  },
  usuario: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;