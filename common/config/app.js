'use strict';

var ratingImages = angular.module('ratingImages', ['firebase','ngSanitize','angularValidator','ngRoute']);

ratingImages.run(function ($rootScope, $location) {
    $rootScope.loadCT = false;
    $rootScope.$on('$routeChangeStart', function(event, next, current){
    });
});

ratingImages.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl : 'components/home/views/home.html',
            cache : false
        }).
        when('/admin', {
            templateUrl : 'components/admin/views/listUsers.html',
            cache : false
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);