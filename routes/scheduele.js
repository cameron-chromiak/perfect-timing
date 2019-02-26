const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const {ensureAuthenticated} = require('../helpers/auth')
const router = express.Router()

require('../models/dayScheduele');
const DaySchema = mongoose.model('day');

let dateFromForm
let nameObjects = []
//save day to db
router.post('/save', (req, res)=>{
  if(!req.body.date){
      req.flash('errorMessage', 'You need a date');
  }else{
      const newDay = new DaySchema({
      date: dateFromForm,
      name: nameObjects
    })
    res.redirect('/scheduele/dashboard')
  }


})
//Push object to model
router.post('/pushObject', (req, res)=>{
  let newName = {
    name: req.body.name,
    start: req.body.start,
    end: req.body.end
  }
  dateFromForm = req.body.date
  nameObjects.push(newName)
  // console.log(nameObjects, dateFromForm);

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

router.get('/build', ensureAuthenticated, (req, res, next)=>{
  res.render('scheduele/builder')
})

// router.post('/create', ensureAuthenticated, (req, res, next)=>{
//   let errors = []
//   DaySchema.findOne({
//       date: req.body.date,
//       rawHTML: req.body.rawHTML
//     }).then(day => {
//       if (day) {
//         errors.push({text: "You alreay have a scheduele for this day"})
//         res.render('scheduele/create', {errors: errors})
//       }else{
//         const newDay = new DaySchema({
//         date: req.body.date
//     })
//     newDay.save()
//     // console.log(Object.entries(newDay));
//     res.render('scheduele/builder', {'currentDate': newDay })
//     }
//   })
// })

module.exports = router;
