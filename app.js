const express = require('express');
const exphbs = require('express-handlebars')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const handlebars = require('handlebars');
const flash = require('connect-flash');


handlebars.registerHelper('moment', require('helper-moment'));

handlebars.registerHelper('json', function(context){
  return JSON.stringify(context)
})
const app = express()

//connect to mongoose
mongoose.connect('mongodb+srv://cameron:oN36XXvqn5B7PkXi@cluster0-j4x7e.mongodb.net/schedule?retryWrites=true', {
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
//Passport

//Passport
require('./config/passport')(passport)
app.use(passport.initialize());
app.use(passport.session());

//connect-flash
app.use(flash())


//GLOBALS
app.use(function (req, res, next){
  //is user logged in to display
  res.locals.user = req.user || null
  //flash()
  res.locals.succes_msg = req.flash('succes_msg')
  res.locals.error = req.flash('error_msg')
  next()
})

//load routes
const users = require('./routes/users')
const scheduele = require('./routes/scheduele')
//use routes
app.use('/users', users)
app.use('/scheduele', scheduele)


const port = 4000

app.listen(port, () =>{
  console.log(`Running on port ${port}`);
})
