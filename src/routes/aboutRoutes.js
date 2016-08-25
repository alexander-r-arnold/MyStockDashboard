// require packages
var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var xml2js = require('xml2js');
var aboutRouter = express.Router();

// handles /about
var router = function(){

	var url = 'http://dev.markitondemand.com/MODApis/Api/v2/Lookup?input=';

	aboutRouter.get('/:symbol', function(req, res) {
        var symbol = req.params.symbol;
        request(url + symbol, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                xml2js.parseString(body, function(err, result) {
                    options = {
                        symbol: symbol,
                        resultList: result.LookupResultList.LookupResult
                    };
            	res.send(result.LookupResultList.LookupResult);
            	});
            }
        });
	});

	aboutRouter.get('/', function(req, res) {
		options = {
			data: 'no data'
		}
		res.render('about', options);
	}); 
	
	return aboutRouter;
};

module.exports = router;

