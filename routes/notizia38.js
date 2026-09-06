var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia38', {title: 'Un investimento che lavora per te e per la tua pensione… anche mentre non fai nulla', notizie});
  });
});



module.exports = router;