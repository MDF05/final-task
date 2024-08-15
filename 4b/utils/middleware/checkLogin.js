function validateLogin(req, res, next) {
    if (req.session.user) return next()
    else {
        req.flash("danger", "you not login, please login first")
        return res.redirect("/login")
    }
}

function deleteSession(req, res, next) {
    req.session.destroy()
    res.redirect("/")
}

module.exports = { validateLogin, deleteSession }
