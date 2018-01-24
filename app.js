const http = require('http');
const request = require('request');
var createHTML = require('create-html')
function blockchain () {
    request({
        url: 'https://blockchain.info/stats?format=json',
        json: true
    }, function(err, response, body){
        if (err) {
            console.log(err) 
        }
        console.log(body.market_price_usd)
    });
}

function renderMatrix () {
    const series = ['A', 'B', 'C', 'D', 'E']
    var output = '<form id="inputField" role="form" autocomplete="off">';
    for (var ui = 0; ui < series.length; ui++) {
        output += '<input type="text" name="{{name}}" size="2" />'.replace('{{name}}', series[ui])
    }
    output += '</form>'
    return output;
}

http.createServer(function(req, res){
    // request new visitor
    // blockchain();
    const html = createHTML({
        title: 'example',
        head: '<meta name="description" content="example">',
        body: renderMatrix(),
        favicon: 'favicon.png'
      })
    res.end(html);
}).listen(8000);