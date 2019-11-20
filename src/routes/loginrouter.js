var express = require('express');
var loginrouter = express.Router();


function router(nav) {
    loginrouter.route('/')
        .get((req, res) => {
            res.render('login.ejs', {
                nav,
                title: "LOGIN",

            })
        })
        loginrouter.route('/home')
        .get((req, res) => {
            res.render('home.ejs', {
                nav,
                title: "You Have Logged In ",

            })
        })
        return loginrouter;
}
module.exports = router;