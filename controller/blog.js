const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const Post = require('../models/post');
const slugify = require('slugify');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    //
    Post.find({}).exec(function(err, posts) {
        //res.send(JSON.stringify(posts));
        res.locals.posts = posts;
        res.render('posts');
    })
});

router.get('/add', (req, res) => {
    //
    //res.send('blogi postituse lisamine');
    res.render('add-post');
});

router.post('/add', (req, res) => {
    console.log(req.body);

    let newPost = new Post({
        title: req.body.title,
        slug: slugify(req.body.title),
        author: req.body.author,
        content: req.body.content,
        isPublic: true
    });

    newPost.save(function(err, savedPost) {
        if(err) {
            console.error(err);
            return res.send('error');
        }
        console.log(savedPost);
        res.redirect('/blog');
    })
});

router.get('/:slug/:id', (req, res) => {
    // slug - req.params.slug
    //res.send('slug on ' + req.params.slug);
    Post.findOne({_id: req.params.id, slug: req.params.slug}).exec(function(err, post) {
        if(err) {
            console.error(err);
            return res.send('error');
        }

        if(post) {
            res.send(JSON.stringify(post));
        }else{
            res.send('postitust ei leitud');
        }
    })
});

module.exports = router;