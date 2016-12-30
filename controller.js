'use strict';

class Controller{

    constructor (){
        this.moment = require('moment');
        this.feriados = require('./feriados.js');
        this.isFeriado = false;
        this.currentDay = this.moment().format('dddd');
        this.currentMonth = this.moment().format('M');
        this.confirmIsFeriado();
    }


    confirmIsFeriado (){
        const currentDate = this.moment(new Date()).format("DD/MM/YYYY");
        this.feriados.forEach(function(curr){
            if (curr == currentDate ){
                this.isFeriado  = true;
                return;
            }
        });
    }

    confirmIsFerias (){
        if(this.currentMonth == 12 || this.currentMonth == 1 || this.currentMonth == 2) return true;
        return false;
    }

    confirmIsWeekend (){
        if(this.currentDay == "Sunday" || this.currentDay == "Saturday") return true;
        return false;
    }

    getResponse (){
        if(this.confirmIsFerias()) return "Férias!!!"
        if(this.isFeriado || this.confirmIsWeekend()) return "NÃO";
        return "SIM";
    };
}

module.exports = Controller;

