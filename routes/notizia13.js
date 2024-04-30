var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia13', {title: 'Emergenza cyber risk: come proteggersi da attacchi e furti d&rsquo;identità;', notizie});
  });
});



module.exports = router;