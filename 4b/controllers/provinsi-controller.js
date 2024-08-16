const { where } = require("sequelize")
const Provinsi = require("../models/provinsi.js")
const Kabupaten = require("../models/kabupaten.js")
const { saveImage, deleteImage } = require("../utils/image/save")
const datePostConvert = require("../utils/time/datePostConvert.js")
const calculateAgePost = require("../utils/time/agePost.js")
const { all } = require("../routers/home-router.js")

async function renderProvinsi(req, res, next) {
    try {
        const user = req.session.user
        let update = req.query.update || false

        if (update) {
            update = await Provinsi.findOne({
                where: {
                    user_id: `${user.id}`,
                    id: update,
                },
            })
        }

        res.render("addProvinsi.ejs", {
            layout: "template/template.ejs",
            active: "provinsi",
            user,
            update,
        })
    } catch (err) {
        req.flash("danger", err.message)
        return res.redirect("/provinsi")
    }
}

async function provinsi(req, res, next) {
    try {
        const { nama, diresmikan, pulau } = req.body
        const user = req.session.user
        const pathImage = `assets/uploads/${new Date().getTime()} - ${req.file.originalname}`

        const provinsi = new Provinsi({
            nama,
            diresmikan,
            user_id: user.id,
            pulau,
            photo: pathImage,
        })

        await provinsi.save()
        saveImage(req.file.buffer, pathImage)

        req.flash("succes", "succesfuly added new provinsi")
        res.redirect("/")
    } catch (err) {
        req.flash("danger", err.message)
        return res.redirect("/provinsi")
    }
}

async function deleteProvinsi(req, res, next) {
    try {
        const id = req.params.id
        const user = req.session.user

        const provinsi = await Provinsi.findOne({
            where: {
                user_id: `${user.id}`,
                id,
            },
        })

        deleteImage(provinsi.photo)

        await Provinsi.destroy({
            where: {
                user_id: `${user.id}`,
                id,
            },
        })

        req.flash("succes", "provinsi has been deleted")
        res.redirect("/?view=provinsi")
    } catch (err) {
        req.flash("danger", err.message)
        return res.redirect("/?view=provinsi")
    }
}

async function detailProvinsi(req, res, next) {
    try {
        const id = req.params.id
        const user = req.session.user

        const provinsi = await Provinsi.findOne({
            where: {
                id,
                user_id: `${user.id}`,
            },
        })

        const kabupaten = await Kabupaten.findAll({
            where: {
                user_id: user.id,
                provinsi_id: provinsi.id,
            },
        })

        res.render("provinsi-detail.ejs", {
            layout: "template/template.ejs",
            active: "provinsi",
            user,
            provinsi,
            kabupaten,
            calculateAgePost,
            datePostConvert,
        })
    } catch (err) {
        req.flash("danger", err.message)
        return res.redirect("/")
    }
}

async function updateProvinsi(req, res, next) {
    try {
        const { nama, diresmikan, pulau, provinsi_id } = req.body
        const id = req.params.id
        const user = req.session.user
        const pathImage = `assets/uploads/${new Date().getTime()} - ${req.file.originalname}`

        const provinsi = await Provinsi.findOne({
            where: {
                user_id: `${user.id}`,
                id,
            },
        })

        deleteImage(provinsi.photo)
        saveImage(req.file.buffer, pathImage)

        await Provinsi.update(
            {
                nama,
                diresmikan,
                pulau,
                photo: pathImage,
                provinsi_id,
            },
            {
                where: {
                    user_id: user.id,
                    id,
                },
            },
        )

        req.flash("succes", "updated provinsi with succesfull")
        return res.redirect("/")
    } catch (err) {
        req.flash("danger", err.message)
        return res.redirect(`/provinsi?update=${req.params.id}`)
    }
}

module.exports = { renderProvinsi, provinsi, deleteProvinsi, detailProvinsi, updateProvinsi }
