angular.module('app.controllers', [])
.controller('HomeCtrl', function($scope, $http, $window) {
	console.log('home ctrl');
	$http.get('/users.json')
	.success(function(data) {
		console.log(data);
	})
	// Teach about status in error promise
	.error(function(err, status) {
		console.log(err);
		console.log(status);
		if(status === 401) {
			$window.location = '/users/sign_in';
			// $state.go('login');
		}
	});
})
.controller('LoginCtrl', function($scope, $http) {
	
});