let express = require('express')
let router = express.Router()
//need the category model
let Categories = require("../models/category-model")
let Questions = require("../models/question-model")


router.post('/categories', (req, res) => {

    Categories.create(req.body)
        .then(category => {
            res.send({
                message: "You have successfully created a category ",
                data: category
            })
        })
        .catch(error => {
            res.send({
                error: error
            })
        })


})

router.get('/categories', (req, res) => {
    //route to see all categories

    Categories.find().then(category => {
        res.send({
            data: category
        }).catch(err => {
            res.send({
                error: err
            })
        })
    })
})

router.get('/categories/:id', (req, res) => {
    //route to see specific categories
    Categories.findById(req.params.id).then(category => {
        res.send({
                data: category
            })
            .catch(err => {
                res.send({
                    error: err
                })
            })
    })
})

router.get('/categories/:id/questions/:questionId?', (req, res) => {

    //route to see all questions within categories or specific question
    let CategoryId = req.params.id

    if (req.params.questionId) {
        Questions.findById(req.params.questionId)
            .then(questions => {
                return res.send({
                    data: questions
                })
            }).catch(err)


    }









    Questions.findById({
        categoryId: req.params.id
    }).then(question => {
        res.send({
            data: question
        }).catch(err => {
            res.send({
                error: err
            })
        })


    })

})



module.exports = router