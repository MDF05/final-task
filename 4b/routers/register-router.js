const express = require("express")
const { renderRegister, register } = require("../controllers/register-controller")
const Router = express.Router()

Router.get("/", renderRegister)
Router.post("/", register)

module.exports = Router
