var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia24', {title: 'Cybersecurity, cambia tutto: arriva la Direttiva NIS2', notizie});
  });
});



module.exports = router;