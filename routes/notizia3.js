var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia3', {title: 'Bonini assicurazioni - Un italiano su tre paga le spese mediche di tasca propria: una polizza salute garantisce servizi e consente di risparmiare', notizie});
  });
});



module.exports = router;