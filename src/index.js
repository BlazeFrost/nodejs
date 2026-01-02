const path=require('path')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const { engine } = require('express-handlebars')
const { engine:handlebars } = require('express-handlebars')

const middlewares = require('./app/middlewares/middlewares')

const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db');  
const helper = require('./helper/helper')

//connect to DB
db.connect()

app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.use(methodOverride('_method'))

app.use(middlewares)

//http logger
app.use(morgan('combined'))

//template engine
app.engine('hbs',engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'resources/views/layout'),
  helpers: require('./helper/helper'),
}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname, 'resources/views'))

//route init
route(app)

//console.log('PATH: ',path.join(__dirname, 'resources/views'))

//Local Host

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})