myAppModule.factory('NewApptFactory', function($http, $location, $localStorage) {
	var factory= {};
	var appointment = {}

	var userName = $localStorage.User.user_name;

	factory.createAppt = function(newAppt, callback) {
		console.log("the user is: ",$localStorage.User);
		$http.post('/addAppt/'+$localStorage.User.user_name+'/'+$localStorage.User._id, newAppt).success(function(output){
			callback(output);
		})
	}

	return factory;
})