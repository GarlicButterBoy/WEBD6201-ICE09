import  express = require('express');
let router = express.Router();

/* GET home page. -default */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home', user: '' });
});

/* GET home page. -home */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home', user: '' });
});

/* GET about page. -about */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Us', page: 'about', user: '' });
});

/* GET projects page. -projects */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Our Projects', page: 'projects', user: '' });
});

/* GET services page. -services */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Our Services', page: 'services', user: '' });
});

/* GET contact page. -contact */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us', page: 'contact', user: '' });
});

/* GET login page. -login */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login', page: 'login', user: '' });
});

/* GET  -register */
router.get('/register', function(req, res, next) {
  res.render('index', { title: 'Register', page: 'register', user: '' });
});

/* GET login page. -login */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login', page: 'login', user: '' });
});

/************************* TEMPORARY ROUTING ******************************/
/* GET  -contact list page */
router.get('/contact-list', function(req, res, next) {
  res.render('index', { title: 'Contact List', page: 'contact-list', user: 'admin' });
});

/* GET  -edit page */
router.get('/edit', function(req, res, next) {
  res.render('index', { title: 'Add', page: 'edit', user: 'admin' });
});

/* GET  -edit page */
router.get('/edit/:id', function(req, res, next) {
  let id = req.params.id;
  res.render('edit', { title: 'Edit', page: 'edit', contactID: id, user: 'admin' });
});


module.exports = router;
