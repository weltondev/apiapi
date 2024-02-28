require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectionDB = require('./database/connectionDB');

const app = express();
const routes = require('./routes/routes');
const PORT = process.env.PORT


app.use(express.json());
app.use(cors());
app.use(routes);
connectionDB();

app.listen(PORT, ()=> {
  console.log(`Servidor esta no ar!`);
});