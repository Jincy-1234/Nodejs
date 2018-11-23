var express = require('express');
var router = express.Router();
var Heros=require('../models/heros.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:'HERO HUNTERS'});
});

/*router.get('/saveData', function(req, res, next) {
 console.log(req.query);
 res.send(req.query);
});*/

router.get('/saveData', function(req, res, next) {
	Heros.saveNew(req.query)
 	.then(function(){
 		res.redirect('/getAllHeros')
	})
	.catch(console.log('ERR::in resolving the promise'))
});



router.get('/deleteData', function(req, res, next) {
	Heros.deleteAll(req.query)
 	.then(function(){
 		res.redirect('/getAllHeros')
	})
	.catch(console.log('ERR::in resolving the promise'))
});


router.get('/getAllHeros', function(req, res, next) {
	Heros.getAll()
	.then(function(retVal){
 		res.render('heros',{data:retVal})
	})
	.catch(console.log('ERR::in resolving the promise'))
});

router.get('/viewHeros', function(req, res, next) {
	Heros.ViewAll(req.query)
	.then(function(retVal){
 		res.render('hero',{data:retVal})
	})
	.catch(console.log('ERR::in resolving the promise'))
});

router.get('/UpdateData', function(req, res, next) {

	Heros.getHero(req.query)
	.then(function(retVal){
 		res.render('update',{data:retVal})
 	
	})
	 .catch(console.log('ERR:Updating data from database'))
});
	router.get('/updateHero', function(req,res,next){
	Heros.updateAll(req.query)
	.then(function(){
	res.redirect('/getAllHeros')
    })
    .catch(console.log('ERR:Updating data from database'))
});



module.exports = router;
