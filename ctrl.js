var app = angular.module('store', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'home.html', 
		controller: mainCtrl
	});

	$routeProvider.when('/about', {
		templateUrl: 'about.html', 
		controller: aboutCtrl
	});

	$routeProvider.when('/contact-us', {
		templateUrl: 'contact.html', 
		controller: contactCtrl
	});

	$routeProvider.when('/product/:productid', {
		templateUrl: 'product.html',
		controller: productCtrl
	});
});

function mainCtrl($scope, $http) {
	$http({method: 'GET', url: 'items.json'}).success(function(data) {
		$scope.items = data;
	});
}

function productCtrl($scope, $routeParams) {
	$scope.productKey = $routeParams.productid;
	$scope.iframeUrl = 'http://o.rbn.co/' + $scope.productKey +  '?embed_open=true';
	$('.product').attr('src', $scope.iframeUrl);
}

function aboutCtrl($scope, $http) {
	$http({method: 'GET', url: 'team.json'}).success(function(data) {
		$scope.browns = data;
	});
}

function contactCtrl($scope) {

}