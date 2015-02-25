angular.module('app.controllers', [])
.controller('AppCtrl', function($scope, $http) {
	$scope.message = 'Hello world';

	$http.get('/users/5.json')
	.success(function(data) {
		console.log(data);
	})
	.error(function(err) {
		console.log(err);
	});
});