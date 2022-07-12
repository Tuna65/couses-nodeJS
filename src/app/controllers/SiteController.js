const Course = require('./../models/Course');
const { MongooseToObject } = require('./../../util/Mongoose');

class SiteController {
    // GET Home : /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: MongooseToObject(courses),
                });
            })
            .catch((error) => next(error));
        // res.render('home');
    }

    // GET Search : /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
