var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia2', {title: 'Bonini assicurazioni - Obbligo di assicurazione contro le calamità: l’opportunità oltre l’imposizione', notizie});
  });
});



module.exports = router;