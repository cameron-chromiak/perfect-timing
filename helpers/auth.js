module.exports = {
  ensureAuthenticated: function(req, res, next){
    if(req.isAuthenticated()){
      return next
    }
    // req.flash('error_msg', 'You must login');
    console.log('no can do');
    res.redirect('/users/login')
  }
}
