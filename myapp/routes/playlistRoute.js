var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');

var authenticationRequired = require('./utils.js').authenticationRequired;
var User = require('../model/user.js');
var Playlist = require('../model/playlist.js');

router.post('/', function(request, response){
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

router.post('/:id', authenticationRequired, function(request, response){
	console.log('hi');
	console.log(request.body.songs);
	Playlist.findOne({_id: request.body.id}, function(err, results){
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
});

router.get('/', authenticationRequired, function(request, response){
		console.log('hello');
		console.log(request.user);
		Playlist.find({user: request.user}, function(err,results){
			console.log(results);
			response.json(results);
		});
});


module.exports = router;
