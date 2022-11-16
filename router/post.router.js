const express = require('express');
const router = express.Router();
const formidableMiddleware = require('formidable');
const model = require('../models/index.js');
const Post = model.post;


//all


//create
router.post('api/posts', (req, res) => {

    const form = formidableMiddleware({ });

    form.parse(req, (err,fields, files) => {
        if(err){
            next(err);
            return;
        }
        Post.create(fields).then(result => {
            res.status(201).json({
                message:"Created post successfully",
                payload:fields
            });
        });
    });
});

module.exports = router;