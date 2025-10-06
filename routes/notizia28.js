var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia28', {title: 'Una polizza unica per proteggere tutto ciò che conta', notizie});
  });
});



module.exports = router;