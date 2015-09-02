'use strict';

var angular = require('angular');
var app = require('./');

app.controller('HomeController', HomeController);

function HomeController($scope, $timeout) {
    var vm = this;
    vm.title = 'Hello from Home Controller!';

    $timeout(callAtTimeout, 3000);

};

function callAtTimeout()
{
    console.log('timeout injection works!');
}