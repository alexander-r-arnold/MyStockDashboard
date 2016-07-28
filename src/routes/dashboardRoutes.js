// require packages
var express = require('express');

var dashboardRouter = express.Router();

// handles /dashboard
var router = function(){

	dashboardRouter.get('/', function(req, res) {
		res.render('dashboard');
	});
	
	return dashboardRouter;
};

module.exports = router;
