import  express = require('express');
let router = express.Router();

/* GET home page. -default */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. -home */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. -home */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET projects page. -home */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET services page. -home */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact page. -home */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us' });
});

/* GET login page. -login */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

module.exports = router;
