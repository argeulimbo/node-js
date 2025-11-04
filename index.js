const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect');

// Todas inicializações após o dotEnv

// Ativa dotEnv
dotenv.config();

// Inicia conexão com Banco
connectToDatabase();

// Inicializa Express
require('./modules/app');