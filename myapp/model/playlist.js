var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Playlist = new Schema({
	title: String,
	songs: []

});

module.exports = mongoose.model('Playlist', Playlist);