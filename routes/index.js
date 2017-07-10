var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/api/potties', db.getAllPotties);
router.get('/api/pottie', db.getLastPotty);
router.post('/api/pottie', db.createPotty);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
