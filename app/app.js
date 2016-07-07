'use strict';

var app = angular.module('jasperfect', [
    'ngRoute',
    'ngAnimate',
    'ngResource',
    'firebase'
]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'components/homepage/homepage.html',
            controller: 'homepageCntl'
        });
});
