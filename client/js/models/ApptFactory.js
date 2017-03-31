myAppModule.factory('ApptFactory', function($http, $location, $localStorage) {

	var factory= {};
	var appointments = [];

	factory.get_all_appts = function(callback){
		$http.get('/getAllAppts').success(function(output) {
			appointments = output;
			callback(appointments);
		})
	}

	factory.deleteAppt = function(appt, callback){
		$http.post('/delete_appt', appt).success(function(output) {
			callback(output);
		})
	}

	return factory;
})