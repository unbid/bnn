var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia31', {title: 'Guerra in Iran e mercati finanziari: come proteggere i nostri investimenti?', notizie});
  });
});



module.exports = router;