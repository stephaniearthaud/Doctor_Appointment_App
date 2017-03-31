var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
	user_name: {type:String, required: true},
}, {timestamps: true });
mongoose.model('User', UserSchema);