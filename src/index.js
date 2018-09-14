import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'angular';
import 'angular-resource';
import 'angular-local-storage';
import '../styles/main.scss';
import './modules/main-module.js';

angular.module('App').controller('mainController',
    function ($scope, $http) {

        $scope.choosenMovie = [];
        $scope.img_links = [];
        $scope.movies = [];

        $http({method: 'GET', url: './data.json'}).
            then(function success(response) {
                $scope.movies = response.data;
                $scope.choosenMovie = $scope.movies[0];
                for (let i = 0; i < $scope.movies.length; i++) {
                    $scope.img_links = $scope.img_links.concat($scope.movies[i].preview);
                }
        });

        $scope.choose = function (index) {
            $scope.choosenMovie = $scope.movies[index];
        };

        $scope.setStyles = function (index) {
            document.getElementsByClassName('items-image-div-wrap')[index].style.background =
                'url(./src/img/' + $scope.movies[index].preview + ')' + 'no-repeat center';
            document.getElementsByClassName('items-image-div-wrap')[index].style.backgroundSize = 'contain';
        };
});