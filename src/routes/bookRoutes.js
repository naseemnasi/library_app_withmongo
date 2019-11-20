var express = require('express');
var booksRouter = express.Router();
const { booksModel } = require('../models/booksModel');

var test=0;

// var books = [
//     { title: 'The secret', genre: "MYSTRY", auther: "Rhonda Byrne", img: "1stimg.jpg" },
//     { title: 'The Blue Umbrella', genre: "STORY", auther: "Ruskin Bond", img: "2ndimg.jpg" },
//     { title: 'Half Boyfriend', genre: "LOVE", auther: "Chethan Bhagath", img: "3rdimg.jpg" },
//     { title: 'Women in The Window', genre: "Drama", auther: "A.J.Finn", img: "4thimg.jpg" },
//     { title: 'The Blue Umbrella', genre: "Thrilller", auther: "Ruskin bond", img: "5thimg.jpg" }
// ];

function router(nav) {

    booksRouter.route('/')
        .get((req, res) => {

            booksModel.find((error, data) => {
                if (error) {
                    throw error;
                }
                else {
                    test = data;
                    res.render(
                        'books.ejs', {
                            nav,
                            title: "Books",
                            books: data
                        });
                }
            });
        });




    booksRouter.route("/addbook").get(function (req, res) {
        res.render('addbook.ejs',
            {
                nav,
                title: "Add Book",
                books

            })
    })

    booksRouter.route("/save").post(function (req, res) {
        var book = new booksModel(req.body)
        book.save((error, data) => {
            if (error) {
                res.json({ "status": "error" });
                throw error;

            }
            else {
                res.send(data)
                // res.json({"status" : "succses"});

            }
        })
    })




    booksRouter.get('/viewAllApi', (req, res) => {
        booksModel.find((error, data) => {
            if (error) {
                res.send(error);
                throw error;

            }
            else {
                res.send(data);


            }
        })
    })







    booksRouter.route('/:id').get(function (req, res) {
        const id = req.params.id;
        res.render('book', {
            nav,
            title: "BOOKS",
            book: test[id]
        })
    })






    return booksRouter;
}
module.exports = router;