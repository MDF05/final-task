const bcrypt = require("bcrypt")
const  User  = require("../models/user")

async function renderLogin(req, res, next) {
    try {
        res.render("login.ejs", {
            layout: "template/template.ejs",
            active: "login",
            user: false,
        })
    } catch (err) {
        req.flash("danger", err.message)
        req.session.user = false
        return res.redirect("/register")
    }
}

async function login(req, res, next) {
    try {
        const { email, password } = req.body

        const user = await User.findOne({
            where: {
                email,
            },
        })
        console.log(user)
        if (!user) {
            req.flash("danger", "account not found or you not register")
            return res.redirect("/login")
        }

        const comparePassword = await bcrypt.compare(password, user.dataValues.password)
        if (!comparePassword) {
            req.flash("danger", "incorect password or wrong username")
            return res.redirect("/login")
        }

        req.flash("succes", "succesfully login user, now you can acces the website")
        req.session.user = user.dataValues
        res.redirect("/")
    } catch (err) {
        req.flash("danger", err.message)
        req.session.user = false
        return res.redirect("/login")
    }
}

module.exports = { renderLogin, login }
