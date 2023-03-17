const express = require ("express");
const atendimentosController = require("../controllers/atendimentosController");
const pacientesController = require("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologosController");
const authController = require("../controllers/authController")
const requestLog = require("../middlewares/requestLog");
const psicologosCreateValidation = require("../validations/psicologos/create");
const pacientesCreateValidation = require("../validations/pacientes/create");
const atendimentosCreateValidation = require("../validations/atendimentos/create");
const authLoginValidation = require("../validations/auth/login");
const routes = express.Router();

//psicologos
routes.get("/psicologos", requestLog, psicologosController.listarPsicologo );
routes.get("/psicologos/:id", requestLog, psicologosController.listarPsicologoId );
routes.post("/psicologos", psicologosCreateValidation, psicologosController.cadastrarPsicologo);
routes.post("/login", authLoginValidation, authController.login)
routes.put("psicologos/:id", psicologosCreateValidation, psicologosController.atualizarPsicologo);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);

//pacientes
routes.get("/pacientes", pacientesController.listarPaciente);
routes.get("/pacientes/:id", pacientesController.listarPacienteId );
routes.post("/pacientes", pacientesCreateValidation, pacientesController.cadastrarPaciente);
routes.put("pacientes/:id",pacientesCreateValidation, pacientesController.atualizarPaciente);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);

//atendimentos
routes.get("/atendimentos", atendimentosController.listarAtendimento );
routes.get("/atendimentos/:id", atendimentosController.listarAtendimentoId );
routes.post("/atendimentos", atendimentosCreateValidation, atendimentosController.criarAtendimento);
routes.put("atendimentos/:id", atendimentosCreateValidation, atendimentosController.atualizarAtendimento);
routes.delete("/atendimentos/:id", atendimentosController.cancelarAtendimento);

module.exports = routes;