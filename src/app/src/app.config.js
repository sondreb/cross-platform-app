'use strict';

function Config($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
    .state('Home', {
        url: '/',
        controller: 'ExampleCtrl as home',
        templateUrl: 'home.html',
        title: 'Home'
    });

    $urlRouterProvider.otherwise('/');

}

module.exports = Config;
