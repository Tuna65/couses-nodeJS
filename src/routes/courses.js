const express = require('express');
const router = express.Router();

var CourseController = require('./../app/controllers/CoursesController');

router.get('/create', CourseController.create);

router.post('/store', CourseController.store);

router.get('/:slug', CourseController.show);

router.post('/handle-actions-form', CourseController.handleAction);

router.delete('/:_id', CourseController.delete);

router.put('/:_id', CourseController.update);

router.get('/:_id/edit', CourseController.edit);

module.exports = router;
