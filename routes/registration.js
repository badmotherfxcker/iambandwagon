var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('registration', { title: 'your favourite website' });
});

module.exports = router;
