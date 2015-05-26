var express = require('express');
var data = require('../data/data');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/projects.html', function(req, res, next) {
    var name = req.params.name;
    var projects = data.allProjects();
    res.render('projects', { title: "Projects", projects: projects });
});

module.exports = router;
