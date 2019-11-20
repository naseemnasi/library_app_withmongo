var express = require('express');
var autherRoute = express.Router();
const {addAuthorModel} = require('../models/addAuthorModel');

var test = 0;

var authers = [{ name: "Rhonda Byrne", dob: "01-02-12", imag: "ath1.jpg" },
{ name: "Ruskin Bond", dob: "02-02-12", imag: "ath2.jpg" },
{ name: "Chethan Bhagath", dob: "03-02-12", imag: "ath3.jpg" },
{ name: "A.J.Finn", dob: "04-02-12", imag: "ath4.jpg" },
{ name: "Ruskin Bond", dob: "02-02-12", imag: "ath2.jpg" }];

function router(nav){

    autherRoute.route('/')
        .get((req, res) => {
            addAuthorModel.find((error,data)=>{
                if(error){
                    throw error;
                }
                else{
                    test = data;
                    res.render(
                        'authers.ejs',
                        {
                            nav,
                            title: "Authors",
                            authors:data
                        }
                    );
                }
            });
        });

    autherRoute.route('/addAuthor')
        .get((req,res)=>{
            res.render('addauthor.ejs',
            {
                nav,
                title:"Add Authors",
                authers
            });
        });

    autherRoute.route('/save')
        .post((req,res)=>{
            var author = new addAuthorModel(req.body);
            author.save((error,data)=>{
                if(error){
                    res.json({"Status":"Error"});
                    throw error;
                }
                else{
                    res.json({"Status":"Success"});
                }
            });
        });

    autherRoute.get('/viewAllapi',(req,res)=>{
            addAuthorModel.find((error,data)=>{
                if(error){
                    throw error;
                }
                else{
                    res.send(data);
                }
            });
        });

    autherRoute.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render(
                'author',
                {
                    nav,
                    title: "Authors",
                    author: test[id]
                }
            );
        }
    );

    return autherRoute;
}

module.exports = router;






































// function athrou(nav) {

//     autherRoute.route("/").get(function (req, res) {
//         res.render('authers.ejs', {
//             nav,
//             title: "Authers",
//             authers
//         });
//     });
//     autherRoute.route("/:id").get(function (req, res) {
//         const id = req.params.id;
//         res.render('auther.ejs', {
//             nav,
//             title: "Auther",
//             auther: authers[id]
//         });
//     });








//     authorRouter.route('/addAuthor')
//         .get((req,res)=>{
//             res.render('addAuthor',
//             {
//                 nav,
//                 title:"Add Authors"
//             });
//         });

//     authorRouter.route('/save')
//         .post((req,res)=>{
//             var author = new addAuthorModel(req.body);
//             author.save((error,data)=>{
//                 if(error){
//                     res.json({"Status":"Error"});
//                     throw error;
//                 }
//                 else{
//                     res.json({"Status":"Success"});
//                 }
//             });
//         });

//     authorRouter.get('/viewAllapi',(req,res)=>{
//             addAuthorModel.find((error,data)=>{
//                 if(error){
//                     throw error;
//                 }
//                 else{
//                     res.send(data);
//                 }
//             });
//         });








//     return autherRoute;

// }
// module.exports = athrou;