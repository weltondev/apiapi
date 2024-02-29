require('dotenv').config();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'univesp';

const usuarioController = {

  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const userExist = await User.findOne({ email });

      if(!userExist){
        return res.status(400).json(`Usuário não cadastrado!`);
      }

      const verifcaSenha = bcrypt.compareSync(senha, userExist.senha)

      if(!verifcaSenha){
        return res.status(400).json(`Senha inválida!`);
      }


      try {
        
        const token = jwt.sign({
          id: userExist._id,
          nome: userExist.nome,
          email: userExist.email
        }, secret, { expiresIn: 600 });

        res.status(200).json({msg: 'Autenticado', token})
      } catch (error) {
        return res.status(401).json(`Falha ao autenticar!`);
      }
      
    } catch (error) {
      res.status(400).json({ error });
      console.error(error);
    }
  },

  async listar(req, res) {
    try {
      const usuarios = await User.find({}, '-senha');


      res.status(200).send({ usuarios })
    } catch (error) {
      res.json("Falha ao listar usuários");
      console.error(error);
    }
  },

  async criar(req, res) {
    try {
      const { nome, email, senha, confirma } = req.body;
      const userExist = await User.findOne({ email });
      const senhaCripto = bcrypt.hashSync(senha, 12);

      // Valida os campos
      if(!nome || !email || !senha || !confirma) {
        return res.status(400).json(`Preencha todos os campos corretamente e tente novamente!`);
      }

      // Verifica se as senhas conferem
      if(senha != confirma){
        return res.status(400).json(`Senhas não conferem!`);
      }

      // Verifica se o usuário já existe
      if(userExist) {
        return res.status(400).json(`Usuário já cadastrado!`);
      }

      //Cria o usuário no banco
      const usuario = await User.create({ nome, email, senha: senhaCripto });

      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json("Falha ao cadastrar usuários");
      console.error(error);
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndUpdate(id, req.body);

      return res.status(200).send(`Usuario atualizado com sucesso!`);
    } catch (error) {
      res.status(400).json("Falha ao atualozar usuário");
      console.error(error);
    }
  },

  async remover(req, res) {
    try {
       const { id } = req.params;
       const userExist = await User.findById(id);

       if(!userExist){
        return res.status(400).json(`Usuário não encontrado!`);
       }
       const user = await User.findByIdAndDelete(id);

       return res.status(200).send(`Usuário removido!`);
    } catch (error) {
        console.log(error);

        return res.status(400).send({ error: `${error}`})
    }
}
}


module.exports = usuarioController