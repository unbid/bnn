var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia36', {title: 'Il tuo conto corrente è un posto sicuro? Sì, che perde centinaia di euro all’anno…', notizie});
  });
});



module.exports = router;