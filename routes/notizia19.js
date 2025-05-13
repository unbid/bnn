var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia19', {title: 'L\'investimento in borsa è davvero sinonimo di rischio?', notizie});
  });
});



module.exports = router;
