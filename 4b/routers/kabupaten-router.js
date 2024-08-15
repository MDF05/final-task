const {
    renderKabupaten,
    kabupaten,
    updateKabupaten,
    deleteKabupaten,
    detailKabupaten,
} = require("../controllers/kabupaten-controller")
const express = require("express")
const Router = express.Router()

Router.get("/", renderKabupaten)
Router.post("/", kabupaten)
Router.put("/:id", updateKabupaten)
Router.get("/detail/:id", detailKabupaten)
Router.delete("/:id", deleteKabupaten)

module.exports = Router
