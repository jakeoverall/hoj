let express = require('express')
let router = express.Router()
//need the category model
let Categories = require("../models/category-model")
let Questions = require("../models/question-model")
let Comments = require("../models/comment-model")


router.post('/questions', (req, res) => {

    Questions.create(req.body)
        .then(question => {
            res.send({
                message: "You have successfully created a question ",
                data: question
            })
        })
        .catch(error => {
            res.send({
                error: error
            })
        })


})

router.get('/questions', (req, res) => {
    //route to see all categories

    Questions.find().then(question => {
        res.send({
            data: question
        }).catch(err => {
            res.send({
                error: err
            })
        })
    })
})

router.get('/questions/:id', (req, res) => {
    //route to see specific categories
    Questions.findById(req.params.id).then(question => {
        res.send({
            data: question
        })
            .catch(err => {
                res.send({
                    error: err
                })
            })
    })
})

// router.get('/categories/:id/questions/:questionId?', (req, res) => {

//     //route to see all questions within categories or specific question
//     let CategoryId = req.params.id

//     if (req.params.questionId) {
//         Questions.findById(req.params.questionId)
//             .then(questions => {
//                 return res.send({
//                     data: questions
//                 })
//             }).catch(err => {
//                 res.send({
//                     error: err
//                 })
//             })


//     }


//     Questions.findById({
//         categoryId: req.params.id
//     }).then(question => {
//         res.send({
//             data: question
//         }).catch(err => {
//             res.send({
//                 error: err
//             })
//         })


//     })

// })

// router.put('questions/:id', (req, res) => {
//     Questions.findById(req.params.id).then(question => {
//         res.send({ data: question })
//     }).catch(err => {
//         res.send({
//             error: err
//         })
//     })
//     Questions.votes[req.body.userId] = req.body.votes
//     Question.Save()
//         .then(question => {
//             res.send({ data: question })
//         }).catch(err => {
//             res.send({
//                 error: err
//             })
//         })

// })








module.exports = router