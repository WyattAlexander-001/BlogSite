const express = require('express');
const articlesRouter = require('./routes/articles');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/articles',articlesRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test Description 2'
    }]
    res.render('articles/index', {articles: articles})
    // res.render('index', {articls: articles})
});

app.listen(3000)