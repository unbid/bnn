var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia16', {title: 'Arriva l’autunno: cadono le foglie e diminuiscono le pensioni…', notizie});
  });
});



module.exports = router;
