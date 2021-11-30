

const config = require('./config.js')
const coinbase = require('coinbase')
var Client = require('coinbase').Client;

var crypto = require('crypto');

var request = require('request');

const apiKey = config.default.COINBASE_API_KEY
const apiSecret = config.default.COINBASE_API_SECRET
const userID = config.default.COINBASE_ID

const client = coinbase.Client({'apiKey':apiKey, 'apiSecret':apiSecret})


function GetPrice(priceTime){
    //get unix time in seconds
    if(timestamp == undefined){
        var timestamp = Math.floor(Date.now() / 1000);
    }
    // set the parameter for the request message
    var req = {
        method: 'GET',
        path: 'v2/prices',
        body: ''
    };

    var message = timestamp + req.method + req.path + req.body;
    console.log(message);

    //create a hexedecimal encoded SHA256 signature of the message
    var signature = crypto.createHmac("sha256", apiSecret).update(message).digest("hex");

    //create the request options object
    var options = {
        baseUrl: 'https://api.coinbase.com/',
        url: req.path,
        method: req.method,
        headers: {
            'CB-ACCESS-SIGN': signature,
            'CB-ACCESS-TIMESTAMP': timestamp,
            'CB-ACCESS-KEY': apiKey,
            
        }
    };
    
    request(options,function(err, response){
        if (err) console.log("Error!" + err);
        debugger;
        var res = response;
        console.log(response.body);
        
        
    });
    
}

export default GetPrice;