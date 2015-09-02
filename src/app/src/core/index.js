'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

var app = angular.module('app.core', [

]);

module.exports = app;

bulk(__dirname, ['./**/!(*index|*.spec).js']);