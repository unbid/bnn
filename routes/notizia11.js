var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia11', {title: 'Caos pensioni: La nostra mappa per capirci qualcosa di più', notizie});
  });
});



module.exports = router;