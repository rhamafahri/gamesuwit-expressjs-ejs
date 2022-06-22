// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }

const express = require('express')
const app = express()
const bcrypt = require('bcryptjs')
    // const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const fs = require('fs')
const jwt = require('jsonwebtoken')

function signToken(payload) {
    return jwt.sign(payload, "asdjhasdih2182")
}
// const initializePassport = require('./passport-config')
// initializePassport(
//     passport,
//     email => users.find(user => user.email === email),
//     id => users.find(user => user.id === id)
// )

const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
        secret: "asdhaskdhas12321",
        resave: false,
        saveUninitialized: false
    }))
    // app.use(passport.initialize())
    // app.use(passport.session())
app.use(methodOverride('_method'))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/index1', (req, res) => {
    res.render('index1.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {
    console.log(req.body);
    const { email, password } = req.body
    const data = JSON.parse(fs.readFileSync("./login.json", "utf-8"))
    const findEmail = data.find(el => el.email === email);
    console.log(findEmail);
    if (!findEmail) {
        res.status(400).json({ message: "Invalid email/password" })
    }
    console.log(findEmail.password, password);
    if (password == findEmail.password) {
        console.log("masuukk");
        let payload = {
            id: findEmail.id,
            email: findEmail.email,
        };
        const token = signToken(payload);
        res.redirect("/index1")
    } else {
        res.status(400).json({ message: "Invalid email/password" })
    }
});

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
})

app.delete('/logout', (req, res) => {
    res.redirect('/login')
})

// function checkAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next()
//     }

//     res.redirect('/login')
// }

// function checkNotAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return res.redirect('/')
//     }
//     next()
// }

app.listen(3000)