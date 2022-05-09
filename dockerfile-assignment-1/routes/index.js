var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node.js Express App' });
});

router.get('/hiya', (req,res,next) => {
  res.render('hiya', {
    title: "Hiya",
    body: "Uncle Roger says hi!"
  })
})

module.exports = router;
