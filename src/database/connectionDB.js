require('dotenv').config();
const mongoose = require('mongoose');
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;


function connection(){
  mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.oelrajq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(()=>{
    console.log(`Conectado ao MongoDB!`);
  })
  .catch((error)=>{
    console.log(`error`);
  })
}

module.exports = connection;