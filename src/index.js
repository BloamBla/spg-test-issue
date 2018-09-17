import '../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'angular';
import 'angular-resource';
import 'angular-local-storage';
import 'angular-route';
import '../styles/main.scss';
import './modules/main-module.js';
import './controllers/movie-ctrl';

angular.module('App').controller('mainController',
    function ($scope, $http, sourcesCtrl) {

        $scope.choosenMovie = [];
        $scope.imgLinks = [];
        $scope.movies = [];
        $scope.videoLinks = [];

        $http({method: 'GET', url: './data.json'}).then(function success(response) {
            $scope.movies = response.data;
            $scope.choosenMovie = $scope.movies[0];
            sourcesCtrl.setMovie($scope.choosenMovie);
        });

        $scope.choose = function (index) {
            $scope.choosenMovie = $scope.movies[index];
        };

        $scope.setStyles = function (index) {
            document.getElementsByClassName('items-image-div-wrap')[index].style.background =
                'url(./src/img/' + $scope.movies[index].preview + ')' + 'no-repeat center';
            document.getElementsByClassName('items-image-div-wrap')[index].style.backgroundSize = 'contain';
        };

        $scope.changeMovie = function (item) {
            item.play = true;
            $scope.choosenMovie = item;
            sourcesCtrl.setMovie(item);
        };

    });