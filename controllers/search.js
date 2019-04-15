const express = require('express')
, router = express.Router()

const data = require ('./mockdata');


router.get('/', function(req, res){
    if (req.query.name) {
    	res.send(data.filter(val=>val.name.toLowerCase().indexOf(req.query.name.toLowerCase()) > -1));
    }
    else {
    	res.send(data.filter(val=>val.stars === parseInt(req.query.stars)));
    }
  });

module.exports = router