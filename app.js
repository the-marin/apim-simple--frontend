var app = angular.module('MyApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'view/home.html',
            controller  : 'homeController'
        })
        .when('/about', {
            templateUrl : 'view/about.html',
            controller  : 'aboutController'
        })
});

app.controller('homeController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Message from HOME!';
});

app.controller('aboutController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Message from ABOUT!';
});
