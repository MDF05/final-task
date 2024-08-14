function validateLogin(req, res, next) {
    if (req.session.user) return next()
    else {
        req.flash("danger", "you not login, please login first")
        return res.redirect("/login")
    }
}

module.exports = { validateLogin }
