const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const {ensureAuthenticated} = require('../helpers/auth')
const router = express.Router()

require('../models/dayScheduele');
const DaySchema = mongoose.model('day');

router.post('/new-row', (req, res)=>{
  console.log(req.body);
})

//dashboard
router.get('/dashboard', (req,res)=>{
  try{
    DaySchema.find().then(days =>{
      if(days){
        console.log(days);
      // FIXME: does not send
        res.render('scheduele/dashboard', {'stats': days})
      }else{
        res.render('scheduele/dashboard', {err: "You've no schedueles"})
      }
    })
  }catch(err){
    throw err
  }
})

router.get('/create', (req, res)=>{
  res.render('scheduele/create')
})

// This is a the POST of /create
router.post('/create', (req, res)=>{
  let errors = []
  DaySchema.findOne({
      date: req.body.date
    }).then(day => {
      if (day) {
        errors.push({text: "You alreay have a scheduele for this day"})
        res.render('scheduele/create', {errors: errors})
      }else{
        const newDay = new DaySchema({
        date: req.body.date
    })
    newDay.save()
    console.log(Object.entries(newDay));
    res.render('scheduele/builder', {'currentDate': newDay })
    }
  })
})

module.exports = router;
