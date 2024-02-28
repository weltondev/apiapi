const jwt = require('jsonwebtoken');
const secret = 'univesp';

function verificaToken(req, res, next){
  const token = req.headers['x-access-token'];
  jwt.verify(token, secret, (error, decoded) => {
    if(error) return res.status(401).json({ msg: `Não Autorizado! ${error}` });

    console.log("passou");
    next();
  })
  
}

module.exports = verificaToken;