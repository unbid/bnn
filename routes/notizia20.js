var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia20', {title: 'Novità dalla Finanziaria: la previdenza complementare è un’opportunità per anticipare il pensionamento', notizie});
  });
});



module.exports = router;