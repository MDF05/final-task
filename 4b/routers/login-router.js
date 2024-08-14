const express = require("express")
const { renderLogin, login } = require("../controllers/login-controller")
const Router = express.Router()

Router.get("/", renderLogin)
Router.post("/", login)

module.exports = Router
