'use strict'
const Controller = require('./controller.js');

class Server {
	constructor() {
		this.express = require('express');
		this.cors = require('cors');
		this.favicon = require('serve-favicon');
		this.port = process.env.PORT || 3000;
		this.app = this.express();
		this.initRoutes();
		this.initMiddleware();
		this.initApp();
	}

	initRoutes (){
		this.app.get('/', (req, res)=> {
		    const resultado = new Controller();
		    res.render(__dirname+'/public/index', {message: resultado.getResponse()});
		});
	}

	initMiddleware (){
		this.app.use(this.favicon(__dirname + '/public/favicon.ico'));
		this.app.use(this.cors());
		this.app.set('view engine', 'ejs');    	
	}

	initApp (){
		this.app.listen(this.port, ()=>{
		    console.log('Rodando na porta '+this.port);
		});
	}
}

module.exports = Server;