var express = require('express');
var router = express.Router();

/* GET privacy. */
router.get('/', function(req, res, next) {
  res.render('privacy', { title: 'Privacy'});
});

module.exports = router;