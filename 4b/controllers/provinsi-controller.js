const Provinsi = require("../models-test/provinsi-model")

function renderProvinsi(req, res, next) {
    try {
        const user = req.session.user
        res.render("addProvinsi.ejs", { layout: "template/template.ejs", active: "provinsi", user })
    } catch (err) {
        req.flash("danger", err.message)
        return res.redirect("/provinsi")
    }
}

async function provinsi(req, res, next) {
    try {
        const { nama, diresmikan, pulau } = req.body
        const user = req.session.user
        const provinsi = new Provinsi({
            nama,
            diresmikan,
            user_id: user.id,
            pulau,
            photo: req.file.path,
        })

        await provinsi.save()

        req.flash("succes", "succesfuly added new provinsi")
        res.redirect("/")
    } catch (err) {
        req.flash("danger", err.message)
        return res.redirect("/provinsi")
    }
}

module.exports = { renderProvinsi, provinsi }
