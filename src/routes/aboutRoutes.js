// require packages
var express = require('express');

var aboutRouter = express.Router();

// handles /about
var router = function(){

	aboutRouter.get('/', function(req, res) {
		res.render('about');
	});
	
	return aboutRouter;
};

module.exports = router;
