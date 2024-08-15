const bcrypt = require("bcrypt")
const User  = require("../models/user")
// const Provinsi = require("../models/provinsi")
const { saveImage } = require("../utils/image/save")
// User.hasMany(Provinsi, { foreignKey: 'userId' });
// Provinsi.belongsTo(User, { foreignKey: 'userId' });

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

        await User.create(
            {
                username,
                password: hashPassword,
                email,
                imageUrl: pathImage,
            },
           
          );

        saveImage(req.file.buffer, pathImage)

        req.flash("succes", "succesfuly added new user, now you can login in login page")
        res.redirect("/login")
    } catch (err) {
        req.flash("danger", err.message)
        return res.redirect("/register")
    }
}

module.exports = { renderRegister, register }
