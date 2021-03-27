import  express = require('express');
let router = express.Router();

/* GET home page. -default */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET home page. -home */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET about page. -about */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Us', page: 'about' });
});

/* GET projects page. -projects */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Our Projects', page: 'projects' });
});

/* GET services page. -services */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Our Services', page: 'services' });
});

/* GET contact page. -contact */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us', page: 'contact' });
});

/* GET login page. -login */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login', page: 'login' });
});

/* GET  -register */
router.get('/register', function(req, res, next) {
  res.render('index', { title: 'Register', page: 'register' });
});

/************************* TEMPORARY ROUTING ******************************/
/* GET  -contact list page */
router.get('/contact-list', function(req, res, next) {
  res.render('index', { title: 'Contact List', page: 'contact-list' });
});

/* GET  -edit page */
router.get('/edit', function(req, res, next) {
  res.render('index', { title: 'Add', page: 'add' });
});

/* GET  -edit page */
router.get('/edit', function(req, res, next) {
  res.render('index', { title: 'Add', page: 'add' });
});


module.exports = router;
