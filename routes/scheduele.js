const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const {ensureAuthenticated} = require('../helpers/auth')
const router = express.Router()

require('../models/dayScheduele');
const DaySchema = mongoose.model('day');

router.post('/new-row', (req, res)=>{
  // console.log(req.body);
})

//Save Schedule
router.post('/save', (req, res)=>{

})

//dashboard
router.get('/dashboard', ensureAuthenticated, (req,res, next)=>{
  let errors = []
    DaySchema.find().then(days =>{
      if(days.length > 0){
        res.render('scheduele/dashboard', {'stats': days})
      }else{
        errors.push({text: "You do not have any schedules"})
        res.render('scheduele/dashboard', {err: errors })
      }
    })
})

router.get('/create', ensureAuthenticated, (req, res, next)=>{
  res.render('scheduele/create')
})

// This is the POST of /create adds date to collection and checks if
// incoming req has a previously used date
router.post('/create', ensureAuthenticated, (req, res, next)=>{
  let errors = []
  DaySchema.findOne({
      date: req.body.date,
      rawHTML: req.body.rawHTML
    }).then(day => {
      if (day) {
        errors.push({text: "You alreay have a scheduele for this day"})
        res.render('scheduele/create', {errors: errors})
      }else{
        const newDay = new DaySchema({
        date: req.body.date
    })
    newDay.save()
    // console.log(Object.entries(newDay));
    res.render('scheduele/builder', {'currentDate': newDay })
    }
  })
})

module.exports = router;
