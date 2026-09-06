var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia35', {title: 'Pensione futura: dal 1° luglio adesione automatica al fondo pensione per neoasssunti', notizie});
  });
});



module.exports = router;