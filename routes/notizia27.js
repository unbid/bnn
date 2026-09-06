var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia27', {title: 'Piemonte: 8 milioni di euro per le PMI, ma solo con polizze catastrofali', notizie});
  });
});



module.exports = router;