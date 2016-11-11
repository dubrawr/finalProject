var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');

var User = require('../model/user.js');
var Playlist = require('../model/playlist.js');

router.post('/playlist', function(request, response){
	var createdPlaylist = new Playlist({
		title: '',
		songs: []
	});
	createdPlaylist.save(function(err){
		if (err){
			console.log(err);
			return response.status(500).json();
		}
		return response.status(201).json(createdPlaylist);
	});
});

module.exports = router;
