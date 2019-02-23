const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const {ensureAuthenticated} = require('../helpers/auth')
const router = express.Router()

require('../models/Employee');
const Employee = mongoose.model('employee');


router.post('/new-row', (req, res)=>{
  console.log(req.body);
})

router.get('/', (req, res)=>{
  res.render('dashboard')
})

module.exports = router;
