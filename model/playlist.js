var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Playlist = new Schema({
	title: String,
	songs: [],
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('Playlist', Playlist);