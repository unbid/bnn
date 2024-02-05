var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia9', {title: 'Perch&eacute; &egrave; importante essere un assicuratore?', notizie});
  });
});



module.exports = router;