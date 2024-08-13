const express = require("express")
const env = require("dotenv")
const path = require("path")
const expressEjsLayouts = require("express-ejs-layouts")
const flash = require("express-flash")
const cookieParser = require("cookie-parser")
const session = require("express-session")

env.config()
const port = process.env.port
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
    session({
        secret: "yang baca ganteng",
        resave: false,
        cookie: {
            secure: false,
            maxAge: 1000 * 60 * 60 * 24,
        },
    }),
)
app.use(expressEjsLayouts)
app.use(flash())
app.use(cookieParser())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use("/assets", express.static(path.join(__dirname, "/assets")))

app.get("/", (req, res, next) => {
    req.flash("succes", "garang kali bah")
    return res.render("index.ejs", { layout: "template/template.ejs" })
})

app.listen(port, () => {
    console.log(`your app running in http://localhost:${port}`)
})
