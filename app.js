const express = require('express');
const exphbs = require('express-handlebars')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
var handlebars = require('handlebars');
var flash = require('req-flash');

handlebars.registerHelper('moment', require('helper-moment'));
const app = express()

//connect to mongoose
mongoose.connect('mongodb://localhost/scheduele', {
  useNewUrlParser: true
}).then(() => console.log('Mongo connected!'))
.catch(err => console.log(err))

//set static
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars')

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
  res.render('index')
})
app.get('/about', (req, res) =>{
  res.render('about')
})
// Express session midleware
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

//req-flash
app.use(flash());
flash({ locals: 'flash' })
//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//detect if user is logged in thne display menu items
app.use(function (req, res, next){
  res.locals.user = req.user || null
  next()
})

//load routes
const users = require('./routes/users')
const scheduele = require('./routes/scheduele')
//use routes
app.use('/users', users)
app.use('/scheduele', scheduele)

//Passport
require('./config/passport')(passport)

const port = 4000

app.listen(port, () =>{
  console.log(`Running on port ${port}`);
})
