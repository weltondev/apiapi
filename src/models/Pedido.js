const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  produto: {
    type: mongoose.Types.ObjectId,
    ref: 'Produto',
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;