var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia25', {title: 'Crollo pensioni anticipate e assegni più bassi: come tutelarsi?', notizie});
  });
});



module.exports = router;