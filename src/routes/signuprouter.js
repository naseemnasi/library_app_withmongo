var express = require('express');
var signuprouter = express.Router();






function router(nav) {
    signuprouter.route('/')
        .get((req, res) => {
            res.render('signup.ejs', {
                nav,
                title: "SIGNUP",

            })
        })
    signuprouter.route("/signedup")
        .post(function (req, res) {
            res.render("signedup.ejs",
                {
                    nav,
                    title: "YOUR ACCOUNT HAS BEEN CREATED",

                })

        })
    signuprouter.route("signedup/login")
        .post(function (req, res) {
            res.render("login.ejs",
                {
                    nav,
                    title: "YOUR ACCOUNT HAS BEEN CREATED. LOGIN HERE",

                })
        })
    return signuprouter;
}
module.exports = router;