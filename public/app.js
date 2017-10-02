var app = angular.module("myuser",['ngRoute'])
    .config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'view/login.html',
            controller: 'LoginController'
            })
        .otherwise({redirectTo:'/'});
    //$locationProvider.html5Mode(true);
    
}]);
