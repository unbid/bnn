var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia7', {title: 'Bonini assicurazioni - Lavoro povero e mobilità professionale: come prepararsi alla pensione', notizie});
  });
});



module.exports = router;