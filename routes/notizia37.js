var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia37', {title: 'Apri l’ombrello! Ecco tutte le polizze per metterti al sicuro dal maltempo', notizie});
  });
});



module.exports = router;