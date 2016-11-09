var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	username: String,
	password: String,
	playlists: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Playlist'
	}
});

module.exports = mongoose.model('User', User);