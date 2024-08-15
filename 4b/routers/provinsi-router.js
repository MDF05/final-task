const express = require("express")
const Router = express.Router()
const {
    renderProvinsi,
    provinsi,
    deleteProvinsi,
    detailProvinsi,
    updateProvinsi,
} = require("../controllers/provinsi-controller")

Router.get("/", renderProvinsi)
Router.post("/", provinsi)
Router.put("/:id", updateProvinsi)
Router.get("/detail/:id", detailProvinsi)
Router.delete("/:id", deleteProvinsi)

module.exports = Router
