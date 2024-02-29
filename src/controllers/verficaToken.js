const jwt = require('jsonwebtoken');
const secret = 'univesp';

function verificaToken(req, res, next){
  const token = req.headers['authorization'];

  try{
    jwt.verify(token, secret)
  }catch(error){
    res.status(400).json('Token inválido')
  }

    next();
}

module.exports = verificaToken;