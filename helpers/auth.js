module.exports = {
  ensureAuthenticated: function(req, res, next){
    if(req.isAuthenticated()){
      return next()
    }else{
    let errors = []
    errors.push({text: "You need to log in for that"})
    // console.log('log in');
    res.redirect('/users/login')
  }
}
}
