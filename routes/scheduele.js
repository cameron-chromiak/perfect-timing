const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');

const router = express.Router()



router.post('/new-row', (req, res)=>{
  console.log(req.body);
})

router.get('/', (req, res)=>{
  res.render('create')
})

module.exports = router;
