var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia8', {title: 'Bonini assicurazioni - Emergenza cyber-sicurezza metti al sicuro te stesso o la tua azienda con una polizza cyber risk'
      , notizie});
  });
});



module.exports = router;