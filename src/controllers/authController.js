const Psicologos = require("../models/Psicologos");
const jwt = require("jsonwebtoken")
const secret = require("../configs/secret")
const AuthController = {
    async login(req, res) {
        const {email, senha} = req.body

        const psicologo = Psicologos.findOne({
            where: {
                email,
                senha,
            },
        });

        if(!psicologo) {
            return res.status(400).json("E-mail ou senha invalido, verifique e tente novamente!");
        }

        const token = jwt.sign({
            id: psicologo.id,
            email: psicologo.email,
            nome: psicologo.nome,
        },
        secret.key
        );

        return res.json(token);
    },
};

module.exports = AuthController;