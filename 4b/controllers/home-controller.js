const express = require("express")
const { Kabupaten } = require("../models")
const { Provinsi } = require("../models")
const { where } = require("sequelize")
const datePostConvert = require("../utils/time/datePostConvert.js")
const calculateAgePost = require("../utils/time/agePost.js")

async function renderHome(req, res, next) {
    const view = req.query.view
    const filter = req.query.filter
    const user = req.session.user

    let whereCondition = {
        user_id: `${user.id}`,
    }

    const testregex = /[0-9]/.test(filter)

    if (filter && !testregex) {
        whereCondition.pulau = filter
    }

    const provinsi = await Provinsi.findAll({
        where: whereCondition,
    })

    if (view == "kabupaten") {
        const kabCondition = {}
        if (filter) kabCondition.provinsi_id = filter
        const kabupaten = await Kabupaten.findAll({ where: kabCondition })
        return res.render("kabupaten.ejs", {
            layout: "template/template.ejs",
            active: "kabupaten",
            user,
            kabupaten,
            provinsi,
            filter,
            datePostConvert,
            calculateAgePost,
        })
    } else {
        return res.render("provinsi.ejs", {
            layout: "template/template.ejs",
            active: "provinsi",
            user,
            provinsi,
            filter,
            datePostConvert,
            calculateAgePost,
        })
    }
}
{
}

module.exports = { renderHome }
