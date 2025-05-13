var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia22', {title: 'La forza di un’impresa sta nelle persone… a maggior ragione nei suoi uomini chiave', notizie});
  });
});



module.exports = router;