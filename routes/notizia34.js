var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia34', {title: 'Se ti nasce un figlio, qual è il primo pensiero? Proteggerlo. Subito.', notizie});
  });
});



module.exports = router;