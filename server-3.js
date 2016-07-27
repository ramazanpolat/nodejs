var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.all('/dishes', function (req, res, next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();    
});

app.get('/dishes', function (req, res, next) {
    res.end('Sending all dishes...');
});

app.get('/dishes/:dishId',function (req, res, next) {
    res.end('Sending the dish with id :'+req.params.dishId);    
});

app.post('/dishes',function (req, res, next) {
    res.end('Adding a new dish called '+req.body.name+' with details : '+req.body.description);    
});

app.post('/dishes/:dishId',function (req, res, next) {
    res.write('Updating the dish :'+req.params.dishId );
    res.end('with this name:'+req.body.name + ' and description:'+req.body.description);    
});

app.delete('/dishes',function (req, res, next) {
    res.end('Deleting all dishes...');    
});

app.delete('/dishes/:dishId', function(req, res, next){
        res.end('Deleting dish: ' + req.params.dishId);
});

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
