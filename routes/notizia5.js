var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia5', {title: 'Bonini assicurazioni - Salute e prevenzione: solo il 41% degli italiani si sottopone a controlli regolari', notizie});
  });
});



module.exports = router;