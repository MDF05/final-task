const express = require("express")
const { renderHome } = require("../controllers/home-controller")
const Router = express.Router()
const { validateLogin } = require("../utils/middleware/checkLogin")

Router.get("/", validateLogin, renderHome)

module.exports = Router
