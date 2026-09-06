var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia14', {title: 'Salute: la scienza corre veloce ma serve prevenzione… e un buon “piano B”', notizie});
  });
});



module.exports = router;