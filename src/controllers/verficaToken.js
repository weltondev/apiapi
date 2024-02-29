const jwt = require('jsonwebtoken');
const secret = 'univesp';

function verificaToken(req, res, next){
  const token = req.headers['x-access-token'];
  jwt.verify(token, secret, (error, decoded) => {
    if(error) return res.status(401).json(`Não Autorizado!`);

    next();
  });
  
}

module.exports = verificaToken;