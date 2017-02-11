let express = require('express')
let router = express.Router()

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
    //route to see all questions

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
    //route to see specific question by id
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

router.delete('/questions/:id', (req, res) => {
    Questions.findByIdAndRemove(req.params.id)
        .then(question => {
            res.send({
                message: 'You have successfully deleted question',
                data: question
            }).catch(err => {
                res.send({
                    error: err
                })
            })
        })
})

router.put('/questions/:id/votes', (req, res) => {

    Questions.findById(req.params.id)
        .then(question => {
            question.votes[req.session.uid] = req.body.votes
            question.save()
                .then(() => {
                    res.send({
                        data: question
                    })
                }).catch(err => {
                    res.send({
                        error: err
                    })
                })
        })
        .catch(err => {
            res.send({
                error: err
            })
        })

})

router.put('/questions/:id', (req, res) => {

    Questions.findById(req.params.id)
        .then(question => {
            question.body = req.body.body
            question.save()
                .then(() => {
                    res.send({
                        data: question
                    })
                }).catch(err => {
                    res.send({
                        error: err
                    })
                })
        })
        .catch(err => {
            res.send({
                error: err
            })
        })

})




module.exports = router