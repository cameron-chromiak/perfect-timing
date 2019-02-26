module.exports = {
  ensureAuthenticated: function(req, res, next){
    if(req.isAuthenticated()){
      return next()
    }else{
    let errors = []
    errors.push({text: "You need to log in for that"})
    res.redirect('/users/login')
  }
}
}
