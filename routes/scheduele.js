const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const {ensureAuthenticated} = require('../helpers/auth')
const router = express.Router()

//require('../models/dayScheduele');
const DaySchema = require('../models/dayScheduele');//mongoose.model('day');


router.post('/pushObject', (req, res)=>{
  console.log('pushObject', req.body)
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
  DaySchema.findOne({
    _id: req.params.id
  }).then(theDay=>{
    let name = theDay.name
    console.log('theDay',theDay, name)
    res.render('scheduele/builder', {myObj2:name})
  }).catch(function(err){
    console.log(err);
  })
})



router.post('/day/:id',ensureAuthenticated,(req,res)=>{ //save and update day
  console.log('hopefully',req.params,req.body)
  DaySchema.findOne({_id:req.params.id}).then(day=>{
    day.name = JSON.parse(req.body.data)
    day.save(function(err,day){
      if(!err){
        console.log("from router.post /day:id", day)
      }
    })
  })
})


router.delete('/day/:id',ensureAuthenticated,(req,res)=>{ //save and update day
  console.log('delete',req.params,req.body)
  DaySchema.deleteOne({_id:req.params.id}).then(day=>{
    res.json({deletedTheBastard:true})
  })
})

//dashboard
router.get('/dashboard', ensureAuthenticated, (req,res, next)=>{
  let errors = []
    // console.log(req.user, req.user._id)
    //{userId:req.user._id}
    DaySchema.find({userId:req.user._id}).then(days =>{
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


module.exports = router;
