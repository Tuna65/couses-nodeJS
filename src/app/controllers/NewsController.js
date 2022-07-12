class NewsController {
    //[GET] NEWs : /news
    index(req, res) {
        res.render('news');
    }

    //[GET] show news : /news/slug
    show(req, res) {
        res.send('news details!');
    }
}

module.exports = new NewsController();
