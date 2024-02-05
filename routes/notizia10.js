var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia10', {title: 'Tempi lunghi per vistite e prestazioni mediche... non se stipuli una polizza salute', notizie});
  });
});



module.exports = router;