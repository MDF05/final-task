const express = require("express")
const path = require("path")
const expressEjsLayouts = require("express-ejs-layouts")
const flash = require("express-flash")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const multer = require("multer")
const sequelize = require("./models-test/db")

const env = require("dotenv")
env.config()

const homeRouter = require("./routers/home-router")
const registerRouter = require("./routers/register-router")
const loginRouter = require("./routers/login-router")
const kabupatenRouter = require("./routers/kabupaten-router")
const provinsiRouter = require("./routers/provinsi-router")

const { validateLogin } = require("./utils/middleware/checkLogin")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "assets/uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + Date.now())
    },
})

const upload = multer({ storage })

const port = process.env.port
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(expressEjsLayouts)
app.use(
    session({
        secret: "yang baca ganteng",
        resave: false,
        saveUninitialized: true,
        cookie: {
            // secure: false,
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
        },
    }),
)

app.use(cookieParser())
app.use(flash())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use("/assets", express.static(path.join(__dirname, "/assets")))

app.use("/", homeRouter)
app.use("/register", upload.single("image"), registerRouter)
app.use("/login", loginRouter)
app.use("/kabupaten", validateLogin, upload.single("photo"), kabupatenRouter)
app.use("/provinsi", validateLogin, upload.single("photo"), provinsiRouter)

app.use("/", (req, res, next) => {
    req.flash("danger", "page not found")
    return res.redirect("/")
})

app.listen(port, async () => {
    try {
        await sequelize.sync()
        console.log(`\n your app running in http://localhost:${port}`)
        console.log(`connected database`)
    } catch (err) {
        console.log(err.message)
    }
})
