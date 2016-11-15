var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');

var User = require('../model/user.js');
var Playlist = require('../model/playlist.js');

router.post('/playlist', function(request, response){
	var createdPlaylist = new Playlist({
		title: '',
		songs: [],
		user: request.user
	});
	createdPlaylist.save(function(err){
		if (err){
			console.log(err);
			return response.status(500).json();
		}
		console.log(createdPlaylist);
		return response.status(201).json(createdPlaylist);
	});
});

router.post('/playlist/:id', function(request, response){
	console.log(request.body.songs);
	Playlist.findOne({_id: request.body.id.id}, function(err, results){
		console.log(results);
		if (results) {
			results.songs = request.body.songs;
			results.title = request.body.title;
			results.save(function(err){
				if (err) {
					return response.status(400).send(err);
				}
				return response.status(200).json();
			});

		}
		console.log(results);
	});

router.get('/playlist', function(request, response){
	console.log(request.user);
	Playlist.find({user: request.user}, function(err,results){
		console.log(results);
		response.json(results);
	});


});

router.get('/playlist/:id', function(request, response){
	console.log(request.body);
});

});

module.exports = router;
