var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia12', {title: 'Emergenza spese mediche? Con la tua assicurazione sanitaria un check up gratis all’anno', notizie});
  });
});



module.exports = router;