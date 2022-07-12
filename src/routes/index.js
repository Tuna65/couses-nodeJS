const RouteNews = require('./news');
const RouteSite = require('./site');
const RouteCourse = require('./courses');
const RouteMe = require('./me');

function route(app) {
    app.use('/', RouteMe);

    app.use('/', RouteNews);

    app.use('/courses', RouteCourse);

    app.use('/', RouteSite);
}

module.exports = route;
