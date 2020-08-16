const express = require('express')
const router = express.Router();
const Article = require('./article.model');

router.post('/', (req, res) => {
    Article.create( req.body, (error, data) => {
        if(error){
            console.log(`Error creating blog post, ${new Date()}: \n${error}`)
            res.status(400).json(error);
        }
        else{
            res.status(200).json(data);
        }
    })
})

module.exports = router;