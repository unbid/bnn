var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia29', {title: 'In pensione oltre i 70 anni e con pochi spiccioli in tasca', notizie});
  });
});



module.exports = router;