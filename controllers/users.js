const User = require('../models/user');

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup");
};

module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = await new User({ email, username });
        const registerUser = await User.register(newUser, password);
        console.log(registerUser);
        req.login(registerUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash('success', 'Welcome to wanderlust')
            res.redirect('/listings')
        })     
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('/signup')
    }

}

module.exports.renderLoginForm = (req, res) => {
    res.render('users/login');
};

module.exports.login = async (req, res) => {
    req.flash('success', 'welcome to wonderlust');
    let redirectUrl= res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', "You are logged out now!");
        res.redirect('/listings');
    })
};