const Sequelize = require("sequelize");

const DB_NAME = "lavie";
const DB_USER = "root";
const DB_PASS = "Amores22*";
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
};

//objeto para quardar a conexão com o banco de dados
let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Error ao tentar conexão com banco de dados");
}

async function hasConection() {
    try{
       await db.authenticate();
       console.log("Banco de dados conectado!");
    } catch (error) {
       console.error("Error ao tentar se conectar ao banco de dados!");
    }
}

Object.assign(db, {
    hasConection,
});

module.exports = db;