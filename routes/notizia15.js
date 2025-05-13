var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia15', {title: 'Le vacanze sono alle porte: tempo di relax … e rischio furti in casa', notizie});
  });
});



module.exports = router;