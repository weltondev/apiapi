const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  produto: {
    type: mongoose.Types.ObjectId,
    ref: 'Produto'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User