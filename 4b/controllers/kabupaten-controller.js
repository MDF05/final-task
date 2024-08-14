const Kabupaten = require("../models/kabupaten")

function renderKabupaten(req, res, next) {
    try {
        const user = req.session.user
        res.render("addKabupaten.ejs", {
            layout: "template/template.ejs",
            active: "kabupaten",
            user,
        })
    } catch (err) {
        req.flash("danger", err.message)
        return res.redirect("/kabupaten")
    }
}

async function kabupaten(req, res, next) {
    try {
    } catch (err) {
        req.flash("danger", err.message)
        return res.redirect("/kabupaten")
    }
}

module.exports = { renderKabupaten }
