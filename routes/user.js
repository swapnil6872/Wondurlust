const express = require('express');
const router = express.Router({ mergeParams: true });
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');

router.get('/signup', (req, res) => {
    res.render("users/signup");
})

router.post('/signup', wrapAsync(async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = await new User({ email, username });
        const registerUser = await User.register(newUser, password);
        console.log(registerUser);
        req.flash('success', 'Welcome to wanderlust')
        res.redirect('/listings')
    }catch(error){
        req.flash('error',error.message);
        res.redirect('/signup')
    }
   
}))

module.exports = router;