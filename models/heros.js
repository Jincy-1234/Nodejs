var express = require('express');
var JSONData = require('./heros.json');
var fs = require("fs");

const mysql=require('mysql2'); 
let Heros= {}
/*Heros.getAll = function(){
    return JSONData}
Heros.saveNew = function(newHeroData){
    JSONData.push(newHeroData);
    fs.writeFile('./heros.json', JSONData, function(err) {
        if(err){
            console.lgo('ERR.')
        }   
    })
}*/


Heros.getAll = function(){
	return new Promise(function(resolve,reject){ 
  		const connection = mysql.createConnection({
 	 	host: 'localhost',
 	 	user: 'root',
  		database: 'heroes',password:'ccs#1234'
   
	});

	let query='select * from Comic where is_valid=1';
	
	connection.query(query,function(err,result,fields){
		if(err){
			console.log(err);
			console.log('ERR:: fetching data from database.');
			reject();
		}
		else{
		//console.log(result);
		//console.log(fields);
		resolve(result);
		}

	});
	
	});
}



Heros.saveNew = function(newHeroData){
	return new Promise(function(resolve,reject){ 
  		const connection = mysql.createConnection({
 	 	host: 'localhost',
 	 	user: 'root',
  		database: 'heroes',password:'ccs#1234'
   
	});
  		let query=`insert into Comic(Superhero,publisher,alter_ego,first_app,characters,is_valid,update_time) values('${newHeroData.superhero}','${newHeroData.publishr}','${newHeroData.alterego}','${newHeroData.firstapp}','${newHeroData.charactr}',1,'${new Date()}')`;
	
	connection.query(query,function(err,result,fields){
		if(err){
			console.log(err);
			console.log('ERR:: fetching data from database.');
			reject();
		}
		else{
		//console.log(result);
		//console.log(fields);
		resolve(result);
		}

	});
	
	});
    }
    Heros.deleteAll = function(deleteHeroData){
	return new Promise(function(resolve,reject){ 
  		const connection = mysql.createConnection({
 	 	host: 'localhost',
 	 	user: 'root',
  		database: 'heroes',password:'ccs#1234'
   
	});

	let query=`update Comic set is_valid=0 where id= ${deleteHeroData.id}`;
	console.log(query);
	connection.query(query,function(err,result,fields){
		if(err){
			console.log(err);
			console.log('ERR:: fetching data from database.');
			reject();
		}
		else{
		//console.log(result);
		//console.log(fields);
		resolve(result);
		}

	});
	
	});
}


    Heros.ViewAll = function(deleteHeroData){
	return new Promise(function(resolve,reject){ 
  		const connection = mysql.createConnection({
 	 	host: 'localhost',
 	 	user: 'root',
  		database: 'heroes',password:'ccs#1234'
   
	});

	let query=`select * from Comic where id= '${deleteHeroData.id}'`;
	
	connection.query(query,function(err,result,fields){
		if(err){
			console.log(err);
			console.log('ERR:: fetching data from database.');
			reject();
		}
		else{
		//console.log(result);
		//console.log(fields);
		resolve(result);
		}

	});
	
	});
}

Heros.updateAll = function(newHeroData){
	return new Promise(function(resolve,reject){ 
  		const connection = mysql.createConnection({
 	 	host: 'localhost',
 	 	user: 'root',
  		database: 'heroes',password:'ccs#1234'
   
	});
  		let query=`update Comic set Superhero='${newHeroData.superhero}',publisher='${newHeroData.publishr}',alter_ego='${newHeroData.alterego}',first_app='${newHeroData.firstapp}',characters='${newHeroData.charactr}',is_valid=1,update_time='${new Date()}' where id= '${newHeroData.id}'`;
	console.log(query);
	connection.query(query,function(err,result,fields){
		if(err){
			console.log(err);
			console.log('ERR:: fetching data from database.');
			reject();
		}
		else{
		//console.log(result);
		//console.log(fields);
		resolve(result);
		}

	});
	
	});
    }

Heros.getHero = function(value){
	return new Promise(function(resolve , reject){
         const connection = mysql.createConnection({
			//Establishing connection
  			host: 'localhost',
  			user: 'root',
  			database: 'heroes',
  			password: 'ccs#1234'
		 });	

		let query= `select * from Comic where id = ${value.id}`;
		connection.query(query, function(err, result, fields){
		//it execute in  mysql and return the result;function() is a callback function 
			if(err){
				console.log(err);
				reject();
			}
			else{
			//console.log(result);//displaying on console
			//console.log(fields);
			resolve(result);
			}
		});

	});
}

module.exports = Heros;