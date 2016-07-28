// require packages
var express = require('express');

var aboutRouter = express.Router();

// handles /about
var router = function(){

	aboutRouter.get('/', function(req, res) {
		console.log(res);
		console.log(req);
		res.render('about');
	});
	
	return aboutRouter;
};

module.exports = router;
