const { User } = require("../models")
const bcrypt = require("bcrypt")

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

        const saltRounds = 10
        const hashPassword = await bcrypt.hash(password, saltRounds)

        const user = await User.create({
            username,
            password: hashPassword,
            email,
            imageUrl: req.file.path,
        })

        // await user.save()
        console.log(user)

        req.flash("succes", "succesfully to register new account, then login in login page")
        res.redirect("/login")
    } catch (err) {
        req.flash("danger", err.message)
        return res.redirect("/register")
    }
}

module.exports = { renderRegister, register }
