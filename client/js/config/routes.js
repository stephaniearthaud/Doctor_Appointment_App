myAppModule.config(["$routeProvider", function ($routeProvider, $routeParams) {
  	$routeProvider
      .when('/', {
        templateUrl: './../static/partials/login.html'
      })
      .when('/appointments', {
      	templateUrl: './../static/partials/appointment.html'
      })
      .when('/newAppt', {
      	templateUrl: './../static/partials/newAppt.html'
      })
      .otherwise({
  			redirectTo: '/'
  		});
}]);