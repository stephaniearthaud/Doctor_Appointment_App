var users = require('./../controllers/users.js');
var appts = require('./../controllers/appts.js');

module.exports = function(app){
	app.post('/login_user', function(req, res) {
		console.log("in server routes: /login_user");
		console.log("req.body is: ", req.body);
		users.login_user(req, res);
	});

	app.post('/addAppt/:name/:id', function(req, res) {
		console.log("in server routes: /addAppt/");
		console.log("req.params user.name: ", req.params.name);
		console.log("req.params user.id: ", req.params.id);
		console.log("req.body is: ", req.body);
		appts.addNewAppt(req, res);
	})

	app.get('/getAllAppts', function(req, res){
		appts.get_All_Appts(req, res);
	})

	app.post('/delete_appt', function(req, res){
		appts.deleteAppointment(req, res);
	})
};