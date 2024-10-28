var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let x = Math.random();
  let y = Math.abs(x);

  // Send the response in the specified format
  res.send(`Math.abs() applied to ${x} is ${y}`);
  //res.render('index', { title: 'Express' });
});

module.exports = router;
