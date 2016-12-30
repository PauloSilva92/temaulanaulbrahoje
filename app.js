'use strict'

class Server {
	constructor() {
		this.express = require('express');
		this.cors = require('cors');
		this.favicon = require('serve-favicon');
		this.controller = require('./controller.js');
		this.port = process.env.PORT || 3000;
		this.app = this.express();
		this.initRoutes();
		this.initMiddleware();
		this.initApp();
	}

	initRoutes (){
		this.app.get('/', (req, res)=> {
		    const resultado = this.controller();
		    res.render(__dirname+'/public/index', {message: "Férias!!"});
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

new Server();