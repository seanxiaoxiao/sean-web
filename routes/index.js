var express = require('express');
var data = require('../data/data');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index');
});

router.get('/gallery/(:name).html', function(req, res, next) {
    var name = req.params.name;
    var gallery = data.findGallery(name);
    res.render('gallery', { gallery: gallery, title: name, galleries: data.allGalleries() });
});

module.exports = router;
