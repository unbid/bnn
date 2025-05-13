var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia23', {title: 'Lo sapevi che nei mesi estivi si registra un incremento fino al 40% dei furti in abitazione?', notizie});
  });
});



module.exports = router;