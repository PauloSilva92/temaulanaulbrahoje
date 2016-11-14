
var express = require('express');
var cors = require('cors');
var favicon = require('serve-favicon');
var controller = require('./controller.js');


var port = process.env.PORT || 3000;
var app = express();



app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(cors());
app.set('view engine', 'ejs');



app.get('/', function(req, res) {
    var resultado = controller();
    res.render(__dirname+'/public/index', {message: resultado});

});
app.listen(port, function(){
    console.log('Rodando na porta '+port);
});


