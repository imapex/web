'use strict';

/**
 * Created by hapresto on 2/14/17.
 */

var app = angular.module('imapex', [
    'ngRoute',
    'ngResource'
]);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/imapex101', {
            templateUrl: 'views/imapex101.html'
        })
        .when('/demos', {
            templateUrl: 'views/demos.html',
            controller: 'DemosCtrl'
        })
        .otherwise({
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
});