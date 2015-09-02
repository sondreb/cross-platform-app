'use strict';

var appName = 'app';

var angular = require('angular');

var app = angular.module(appName, [
        require('./home').name,
        require('angular-ui-router')
]);

app.constant('AppSettings', require('./app.constants'));
app.config(require('./app.config'));
app.run(require('./app.run'));

app.controller('AppController', AppController);

function AppController() {

    var vm = this;
    vm.title = 'Hello from App Controller!';
    console.log('This is the App controller');
};

angular.element(document).ready(function () {
    angular.bootstrap(document, [appName]);
});
