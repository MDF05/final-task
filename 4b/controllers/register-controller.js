const bcrypt = require("bcrypt")
const { User } = require("../models")
const { saveImage, deleteImage } = require("../utils/image/save")

async function renderRegister(req, res, next) {
    try {
        res.render("register.ejs", {
            layout: "template/template.ejs",
            active: "register",
            user: false,
        })
    } catch (err) {
        req.flash("danger", err.message)
        return res.redirect("/register")
    }
}

async function register(req, res, next) {
    try {
        const { username, email, password } = req.body
        const pathImage = `assets/uploads/${new Date().getTime()} - ${req.file.originalname}`

        const saltRounds = 10
        const hashPassword = await bcrypt.hash(password, saltRounds)

        const user = new User({
            username,
            password: hashPassword,
            email,
            imageUrl: pathImage,
        })

        await user.save()
        saveImage(req.file.buffer, pathImage)

        req.flash("succes", "succesfuly added new user, now you can login in login page")
        res.redirect("/login")
    } catch (err) {
        return res.redirect("/register")
    }
}

module.exports = { renderRegister, register }
