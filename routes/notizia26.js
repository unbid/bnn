var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia26', {title: 'ALERT SICUREZZA: grave vulnerabilità su WhatsApp per dispositivi Apple', notizie});
  });
});



module.exports = router;