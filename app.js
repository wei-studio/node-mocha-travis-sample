const flash = require('connect-flash')
const session = require('express-session')
const express = require('express')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')

const helpers = require('./_helpers');
const passport = require('./config/passport')

const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Hello World!'))

// const authenticated = (req, res, next) => {
//   if (helpers.ensureAuthenticated(req)) {
//     return next()
//   }
//   res.redirect('/')
// }

// app.get('/users', authenticated, function (req, res) {
//   return res.send('done')
// })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
