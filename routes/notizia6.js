var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia6', {title: 'Bonini assicurazioni - Emergenza incidenti domestici: donne e over 65 i più a rischio', notizie});
  });
});



module.exports = router;