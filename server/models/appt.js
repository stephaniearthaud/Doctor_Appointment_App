var mongoose = require('mongoose');
var ApptSchema = new mongoose.Schema({
	name: {type:String, required:true},
	userId: {type:String, required:true},
	date: {type:Date, required:true},
	time: {type:String, required:true},
	complain: {type:String, required:true},
}, {timestamps:true});
mongoose.model('Appt', ApptSchema);