const { renderKabupaten } = require("../controllers/kabupaten-controller")
const express = require("express")
const Router = express.Router()

Router.get("/", renderKabupaten)

module.exports = Router
