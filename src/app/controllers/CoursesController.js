const Course = require('../models/Course');
const { ToObject } = require('./../../util/Mongoose');

class CoursesController {
    // [GET] Slug : /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => res.render('courses\\show', { course: ToObject(course) }))
            .catch(next);
    }

    //[GET] Create : /courses/create
    create(req, res, next) {
        res.render('courses\\create');
    }

    //[POST] Add Course
    store(req, res, next) {
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }

    //[GET] :/courses/_id/edit
    edit(req, res, next) {
        Course.findOne({ _id: req.params._id })
            .then((courses) => {
                res.render('courses\\edit', { courses: ToObject(courses) });
            })
            .catch(next);
    }

    //[PUT] : /courses/_id
    update(req, res, next) {
        Course.updateOne({ _id: req.params._id }, req.body).then(() => res.redirect('/me/stored/courses'));
    }

    //[DELETE] : /courses/_id
    delete(req, res, next) {
        Course.delete({ _id: req.params._id })
            .then(() => res.redirect('back'))
            .catch(next);
    }


    //[POST] : /courses/handle-actions-form
    handleAction(req, res, next) {
        
        // res.json(req.body)
        switch(req.body.action){
            case 'delete':
                Course.delete({ _id: {$in: req.body.coursesIds} })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.send('error!!!')
        }
    }
}

module.exports = new CoursesController();
