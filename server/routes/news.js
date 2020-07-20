const express = require('express');
const router = express.Router();
const NewsAPI = require('newsapi');
const newsApi = new NewsAPI('ba634665e5fc4a9ba409bacb1ef1f862');

router.get('/', (request, response) => {
    const { tag: category } = request.query || {};
    const config = {
        country: 'in',
        language: 'en'
    };
    if (category) {
        config['category'] = category;
    }
    newsApi.v2.topHeadlines(config).then(({ articles }) => {
        response.json({ articles });
    }).catch(error => {
        console.log(error);
        response.send(error);
    })
});

module.exports = router;