var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia18', {title: 'QUANDO UN EURO FA LA DIFFERENZA - La storia di Giada', notizie});
  });
});



module.exports = router;
