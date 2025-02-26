module.exports.isLoggedIn = (req, res, next) => {
    console.log(req.user)
    if (!req.isAuthenticated()) {
        req.flash('error', 'you must be loggedin to Create Listings');
        return res.redirect('/login')
    }
    return next();
}


