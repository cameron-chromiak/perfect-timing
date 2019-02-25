module.exports = {
  ensureAuthenticated: function(req, res, next){
    if(req.isAuthenticated()){
      return next()
    }else{
    console.log('no can do');
    //send message w this
    res.render('/users/login', {'err': "You must log in"})
  }
}
}
