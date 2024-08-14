const express = require("express")
const Kabupaten = require("../models-test/kabupaten-model")
const { provinsi } = require("./provinsi-controller")
const Provinsi = require("../models-test/provinsi-model")
const Router = express.Router()

async function renderHome(req, res, next) {
    const view = req.query.view

    const user = req.session.user
    const provinsi = await Provinsi.findAll({})

    if (view == "kabupaten") {
        const kabupaten = await Kabupaten.findAll({
            where: {
                id: user.id,
            },
        })
        return res.render("kabupaten.ejs", {
            layout: "template/template.ejs",
            active: "provinsi",
            user,
            kabupaten,
        })
    } else {
        console.log(provinsi)
        return res.render("provinsi.ejs", {
            layout: "template/template.ejs",
            active: "provinsi",
            user,
            provinsi,
        })
    }
}

module.exports = { renderHome }
