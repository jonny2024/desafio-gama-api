const db = require("../database");
const {DataTypes} = require("sequelize");
const Pacientes = require("./Pacientes");

const Atendimentos = db.define("Atendimentos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data_horario_atendimento: {
        type: DataTypes.STRING,
    },
    observacao: {
        type: DataTypes.TEXT,
    },
    pacientes_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Pacientes,
            key: 'id',
        }
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tableName: "atendimentos",
});

module.exports = Atendimentos;