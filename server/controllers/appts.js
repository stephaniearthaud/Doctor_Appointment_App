var mongoose = require('mongoose');
var Appt = mongoose.model('Appt');
var User = mongoose.model('User');

module.exports = (function() {
	return{
		addNewAppt: function(req, res) {
			var newAppt = Appt({name:req.params.name, userId:req.params.id, date:req.body.date, time:req.body.time, complain:req.body.complain});
			newAppt.save(function(err, output){
				if (err) {
					console.log("error saving the new appt: ", err);
				} else {
					console.log("Successfully saved the new Appt: ", output);
					res.json(output);
				}
			})
		},

		get_All_Appts: function(req, res) {
			Appt.find({}, function(err, results) {
				if (err) {
					console.log("error retrieving all appts: ", err);
				} else {
					console.log("Successfully retrieved all appts: ", results);
					res.json(results);
				}
			})
		},

		deleteAppointment: function(req, res) {
			Appt.remove({_id: req.body._id}, function(err, result) {
				if (err) {
					console.log("error deleting appt: ", err);
				} else {
					console.log("Successfully deleted the appt: ", result);
					res.json(result);
				}
			})
		}

	}
}) ();