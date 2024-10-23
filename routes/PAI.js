var express = require('express');
var router = express.Router();

/* GET PAI. */
router.get('/', function(req, res, next) {
  res.render('PAI', { title: 'Bonini Assicurazioni'});
});

module.exports = router;