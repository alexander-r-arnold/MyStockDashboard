// require packages
var express = require('express');
var mongoose = require('mongoose');
var xml2js = require('xml2js');

var dashboardRouter = express.Router();

// handles /dashboard
var router = function(){

	dashboardRouter.get('/', function(req, res) {
		res.render('dashboard');
	});
	
	return dashboardRouter;
};

module.exports = router;
