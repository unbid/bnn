var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia4', {title: 'Bonini assicurazioni - Danni da eventi climatici estremi: non farti trovare impreparato scegli la tua polizza con 1 euro al mese', notizie});
  });
});



module.exports = router;