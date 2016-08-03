// require packages
var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({explicitArray: false});

// begin goodreadService 
var stockLookupService = function() {

	var getStockByInput = function(id, cb) {
		
		var options = {
			host: 'http://dev.markitondemand.com/Api/v2',
			path: '/Lookup?input=' + 'AAPL'
		};

		var callback = function(response) {
			var str = '';
			response.on('data', function(chunk) {
				str += chunk;
			});
			response.on('end', function() {
				console.log(str);
				parser.parseString(str, function(err, result) {
					cb(null, result.LookupResultList);
				});
			});
		};
		http.request(options, callback).end();
	};

	return {
		getStockByInput: getStockByInput
	};

};

module.exports = stockLookupService;