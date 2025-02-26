module.exports.isLoggedIn = (req, res, next) => {
    req.session.redirectUrl=req.originalUrl;
    if (!req.isAuthenticated()) {
        req.flash('error', 'you must be loggedin to Create Listings');
        return res.redirect('/login')
    }
    return next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}


