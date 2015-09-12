var express = require('express');
var router = express.Router();
var appdata = require('../data.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  var myArtWork = [];
  var myArtists = [];

  myArtists = appdata.speakers;
  appdata.speakers.forEach(function(item){
  	myArtWork = myArtWork.concat(item.artwork);
  });
  res.render('index', 
  	{ title: 'Home',
  	  artWork: myArtWork,
  	  artists : myArtists,
  	  page: 'home'
    });
});
/* GET speakers page. */
router.get('/speakers', function(req, res, next) {
  var myArtWork = [];
  var myArtists = [];

  myArtists = appdata.speakers;
  appdata.speakers.forEach(function(item){
  	myArtWork = myArtWork.concat(item.artwork);
  });
  res.render('speakers', 
  	{ title: 'Speakers',
  	  artWork: myArtWork,
  	  artists: myArtists,
  	  page: 'artistList'
    });
});

/* GET specific speaker detail page. */
router.get('/speakers/:speakerid', function(req, res, next) {
  var myArtWork = [];
  var myArtists = [];

  appdata.speakers.forEach(function(item){
  	if(item.shortname == req.params.speakerid) {
  		myArtists.push(item);
  		myArtWork = myArtWork.concat(item.artwork);
    }
  });
  res.render('speakers', 
  	{ title: 'Speakers',
  	  artWork: myArtWork,
  	  artists: myArtists,
  	  page: 'artistDetail'
    });
});
module.exports = router;
