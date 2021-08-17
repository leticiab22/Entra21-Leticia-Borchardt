require("dotenv").config()
const { Sequelize } = require("sequelize")
const dbConfig = require("../config/database")

const Usuario = require("../models/Usuario")
const Projeto = require("../models/Projeto")
const Endereco = require("../models/Endereco")

const sequelize = new Sequelize(dbConfig);


// Inicializando os models
Usuario.init(sequelize)
Projeto.init(sequelize)
Endereco.init(sequelize)

// Definindo as associações para os models
Usuario.associate(sequelize.models)
Projeto.associate(sequelize.models)
Endereco.associate(sequelize.models)

module.exports = sequelize;

// Testando Conexão
// (async () => {
//     try {
//         await sequelize.authenticate()
//         console.log('Conexão bem-sucedida!')
//     } catch (error) {
//         console.log('Conexão falhou!', error)
//     } finally {
//         sequelize.close()
//     }
// })();


// terminal -> node .\database\index.js 