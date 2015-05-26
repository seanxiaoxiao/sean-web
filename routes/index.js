var express = require('express');
var data = require('../data/data');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/projects.html', function(req, res, next) {
    var projects = data.allProjects();
    res.render('projects', { title: "Projects", projects: projects });
});

router.get('/projects/{ projectId }.html', function(req, res, next) {
    var projectId = req.params.projectId;
    var project = data.findProject(projectId);
    res.render('project', { title: project.name, project: project });
});

module.exports = router;
