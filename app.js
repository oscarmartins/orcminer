const http = require('http');
const request = require('request');

http.createServer(function(req, res){
    // request new visitor
    request({
        url: 'https://blockchain.info/stats?format=json',
        json: true
    }, function(err, response, body){
        if (err) {
            console.log(err) 
        }
        console.log(body.market_price_usd)
    });
    console.log('hi i`m a new visitor' + req.url)
    res.end('bit coin to the moon');
}).listen(8000);