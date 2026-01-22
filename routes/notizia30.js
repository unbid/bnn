var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia30', {title: 'Scudo Famiglia: da una storia vera la protezione per quello che conta davvero', notizie});
  });
});



module.exports = router;