// require packages
var express = require('express');
var aboutRouter = express.Router();

// handles /about
var router = function(){

	var stockLookupService = require('../services/stock-lookup-service')();
	var stockLookupController = require('../controllers/stock-lookup-controller')(stockLookupService);

	aboutRouter.use(stockLookupController.middleware);
	aboutRouter.route('/') 
		.get(stockLookupController.getInput);
	
	return aboutRouter;
};

module.exports = router;

