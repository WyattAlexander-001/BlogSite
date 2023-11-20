const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => { //http://localhost:3000/articles/test
    res.render('articles/new')
});

router.post('/', (req, res) => {

});

module.exports = router;