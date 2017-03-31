myAppModule.controller('ApptController', function(ApptFactory, $scope, $location, $localStorage, $routeParams) {
	

	$scope.userName = $localStorage.User.user_name;
	

	ApptFactory.get_all_appts(function(data){
		$scope.appts = data;
	})

	$scope.DeleteAppt = function(appt) {
		console.log("delete appt")
		ApptFactory.deleteAppt(appt, function(output){
			ApptFactory.get_all_appts(function(data){
				$scope.appts = data;
			})
		})
	}

	$scope.logout = function() {
		console.log("in logout function");
		$localStorage.User = {};
		$location.url('/');
	}
	$scope.addAppt = function() {
		$location.url('/newAppt');
	}
})