// require packages
var express = require('express');

var userRouter = express.Router();

// handles /user
var router = function(){

	userRouter.get('/', function(req, res) {
		res.render('user');
	});
	
	return userRouter;
};

module.exports = router;
