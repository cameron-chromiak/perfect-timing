const express = require('express');
const { isLoggedIn } = require('../middlewares')

const router = express.Router();
const House = require('../models/House')


//create new house
router.post('/house', isLoggedIn, (req, res)=>{
  // console.log('is here', req.user._id);
  console.log(req.body.HouseName)
  let home = new House({
    HouseName: req.body.HouseName,
    userId: req.user._id
  })
  home.save((err,i)=>{
    // console.log('from house',err, i)
    if(!err){
      res.json({house:true})
    }
  })
})


//save house after editing
router.post('/house/build/:id', (req, res) =>{
  House.findOne({_id:req.params.id})
    .then( house => {
      console.log('xxxxxxxx', req.body.data.members)
      house.task = req.body.data.task
      house.people = req.body.data.members
      house.save((err, doc)=>{
        if(!err){
          res.json({wegood:true})
        }
      } )
    }
      //do stuff
    )
    .catch(err => console.log('Err from house.js: ', err))
  })


// router.get('house/build/:id', isLoggedIn, (req, res)=>{
//   res.send('build')
// })


module.exports = router;
