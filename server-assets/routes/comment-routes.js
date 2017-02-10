let express = require('express')
let router = express.Router()
//need the category model
let Comments = require("../models/comment-model")


//post a comment
router.post('/comments', (req, res) => {

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

//post a vote
router.post('/comments/:id/vote', (req, res) => {

    Comments.findById(req.params.id)
        .then(comment => {
            let currentComment = comment.votes[req.body.userId]
            currentComment = req.body.vote
            currentComment.save()
                .catch(err => {
                    res.send({
                            error: err
                        })
                        .then(() => {
                            res.send({
                                data: comment,
                                votes: currentComment
                            })
                        }).catch(err => {
                            res.send({
                                error: err
                            })
                        })

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





module.exports = router