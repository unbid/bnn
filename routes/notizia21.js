var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia21', {title: 'Vuoi proteggere il tuo patrimonio? Ecco come fare con fondi pensione, polizze vita e piani di accumulo', notizie});
  });
});



module.exports = router;