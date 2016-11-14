var moment = require('moment');
var feriados = require('./feriados.js');


module.exports= function(){
    var isFeriado = false;
    var currentDAy = moment().format('dddd');
    var currentDate = moment(new Date()).format("DD/MM/YYYY");

    feriados.forEach(function(curr){
        if (curr == currentDate ){
            isFeriado  = true;
            return;
        }
    });
    if(isFeriado){
        return "NÃO";
    }
    else if(currentDAy == "Sunday" || currentDAy == "Saturday"){
        return "NÃO";
    }
    else{
        return "SIM";
    }
};
