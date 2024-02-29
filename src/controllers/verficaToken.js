const jwt = require('jsonwebtoken');
const secret = 'univesp';

function verificaToken(req, res, next){
  const token = req.headers['authorization'];
  jwt.verify(token, secret, (error, decoded) => {
    if(error) return res.status(401).json(`Não Autorizado!`);

    next();
  });
}

// function verificaToken(req, res, next) {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split("")[1];

//   if(!token){
//     return res.status(401).json(`Acesso negado!`);
//   }

//   try {
//     jwt.verify(token, secret)

//     next()
//   } catch (error) {
//     res.status(400).json('Token inválido!');
//   }

//   next();
// }

module.exports = verificaToken;