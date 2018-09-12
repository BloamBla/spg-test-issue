import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'angular';
import 'angular-resource';
import 'angular-local-storage';
import '../styles/main.scss';
import './modules/main-module.js';

angular.module('App').controller('mainController',
    function ($scope) {
        $scope.data = require('./data.json');
    });