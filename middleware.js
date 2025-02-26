module.exports.isLoggedIn = (req, res,next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'you must be loggedin to Create Listings');
        res.redirect('/login')
    }
    next();
}


