require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const passport = require('passport')
const indexRoutes = require('./routes/indexRoutes')

const app = express()

// MONGODB CONNECT
mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true })

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set('trust proxy', 1)

// MONGO SESSION STORE
const store = new MongoDBStore({
  uri: process.env.MONGO_DB,
  collection: 'mySessions'
})

// SESSION
app.use(session({
  store: store,
  secret: process.env.SECRET_KEY,
  name: app.get('sessionName'),
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

// MIDDLEWARE PASSPORT
app.use(passport.initialize())
app.use(passport.session())

// ROUTES
app.use('/', indexRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server has been started on port ${process.env.PORT}`)
})
