const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const {ensureAuthenticated} = require('../helpers/auth')
const router = express.Router()

require('../models/dayScheduele');
const DaySchema = mongoose.model('day');


// //save day to db
// router.post('/save', (req, res)=>{
//     console.log(req.body,'adsfafdsadsafdsafdsafda')
//       const newDay = new DaySchema({
//       date: dateFromForm,
//       name: nameObjects
//     })
//     newDay.save()
//     // console.log(newDay);
//     res.redirect('/scheduele/dashboard')
//
//
//
// })
//Push object to model
router.post('/pushObject', (req, res)=>{
  console.log(req.body, 1324321432143214321)
  let newName = {
    name: req.body.name,
    start: req.body.start,
    end: req.body.end
  }
  dateFromForm = req.body.date
  nameObjects.push(newName)
  // console.log(nameObjects, dateFromForm);
})

router.post('/newDay', (req, res)=>{ //create new day
      console.log(req.body,)
        const newDay = new DaySchema({
        date: req.body.date,
        userId: req.user._id //add use to day - must be logged in
      })
      newDay.save(function(err,day){
        if(!err){
          console.log(day)
          res.redirect(`day/${day._id}`)
        }
      })
})



router.get('/day/:id',ensureAuthenticated,(req,res)=>{ //show day
  res.render('scheduele/builder')
})

router.post('/day/:id',ensureAuthenticated,(req,res)=>{ //save and update day
  console.log('hopefully',req.params,req.body)
  DaySchema.findOne({_id:req.params.id}).then(day=>{
    day.name = req.body
    day.save(function(err,day){
      if(!err){
        console.log(day)
        res.json({fuckya:true})
      }
    })
  })
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
