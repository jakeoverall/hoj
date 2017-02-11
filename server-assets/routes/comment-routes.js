let express = require('express')
let router = express.Router()
//need the category model
let Comments = require("../models/comment-model")
let Questions = require("../models/question-model")


//post a comment
router.post('/comments', (req, res) => {
    req.body.userId = req.session.uid
    let questionId = req.body.questionId


    Comments.create(req.body)
        .then(comment => {
            res.send({
                message: "You have successfully created a comment (answer) ",
                data: comment
            })
        })
        .catch(error => {
            res.send({
                error: error
            })
        })


})

//post a vote
router.put('/comments/:commentId/votes', (req, res) => {

    Comments.findById(req.params.commentId)
        .then(comment => {
            comment.votes[req.session.uid] = req.body.votes
            comment.save()
                .then(() => {
                    res.send({
                        data: comment
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


router.put('/comments/:commentId', (req, res) => {

    Comments.findById(req.params.commentId)
        .then(comment => {
            comment.body = req.body.body
            comment.save()
                .then(() => {
                    res.send({
                        data: comment
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



router.get('/comments', (req, res) => {
    //route to see all categories

    Comments.find().then(comment => {
        res.send({
            data: comment
        }).catch(err => {
            res.send({
                error: err
            })
        })
    })
})


router.delete('/comments/:id', (req,res) =>{

Comments.findByIdAndRemove(req.params.id)
    .then(comment => {
        res.send({
            message: "Successfully deleted answer",
            data: comment
        })
    })
    .catch(err => {
        res.send({
            error: err
        })
    })

})
module.exports = router