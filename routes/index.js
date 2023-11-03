var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home ' 
    });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home' 
    });
});

/* GET About Me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('index', { 
    title: 'About Me' 
    });
});

/* GET  Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Projects' 
    });
});

/* GET Contact Me page. */
router.get('/contactme', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Me' 
    });
});

module.exports = router;
