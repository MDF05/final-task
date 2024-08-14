const express = require("express")
const Router = express.Router()
const { renderProvinsi, provinsi } = require("../controllers/provinsi-controller")

Router.get("/", renderProvinsi)
Router.post("/", provinsi)

module.exports = Router
