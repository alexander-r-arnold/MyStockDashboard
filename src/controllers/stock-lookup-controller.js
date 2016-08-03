var stockLookupController = function(stockLookupService) {
	
	var middleware = function(req, res, next) {
		next();
	};

	// gets the home page of books by retrieving all books
	var getInput = function(req, res) {
		var stuff = stockLookupService.getStockByInput();

		var options = {
			data: stuff
		};

		res.render('about', options);
	};

	return {
		middleware: middleware,
		getInput: getInput,
	};
};

module.exports = stockLookupController;