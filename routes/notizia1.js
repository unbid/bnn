var express = require('express');
var router = express.Router();
const dao = require('../models/notizie_dao');

/* GET home page. con caricamento notizie*/
router.get('/', function(req, res) {
  dao.getAllNotizie().then((notizie) =>{
      res.render('notizia1', {title: 'Bonini assicurazioni - E\' tempo di rilassarsi e godersi la pensione… ma nemmeno per sogno!', notizie});
  });
});



module.exports = router;