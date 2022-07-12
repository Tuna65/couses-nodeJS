const Course = require('../models/Course');
const { MongooseToObject } = require('./../../util/Mongoose');

class MeController {
    // [GET] My Courses: /me/stored/courses

    showMyCourse(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted({})])
            .then(([courses, countDelete]) => {
                res.render('me\\myCourse', {
                    countDelete,
                    courses: MongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //[GET] recycle bin: /me/recyclebin/courses
    showRecycleBin(req, res, next) {
        Course.findDeleted()
            .then((courses) => {
                res.render('me\\recyclebin', {
                    courses: MongooseToObject(courses),
                });
            })
            .catch((error) => next(error));
    }

    //[PATH] : /courses/id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params._id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }

    //[DELETE] : /me/_id/force]
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params._id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new MeController();
