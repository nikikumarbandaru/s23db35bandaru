var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('elephants', { title: 'Search Results Elephants' });
});

module.exports = router;
