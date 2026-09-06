var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia17', {title: 'Quanto vale la tua vita? Proteggi te stesso e i tuoi cari con una polizza Dread Disease', notizie});
  });
});



module.exports = router;
