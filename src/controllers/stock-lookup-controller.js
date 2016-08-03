var stockLookupController = function(stockLookupService, nav) {
	
	var middleware = function(req, res, next) {
		next();
	};

	// gets the home page of books by retrieving all books
	var getInput = function(req, res) {
		res.render('stockLookupView');
	};d

	return {
		middleware: middleware,
		getInput: getInput,
	};
};

module.exports = stockLookupControllerController;