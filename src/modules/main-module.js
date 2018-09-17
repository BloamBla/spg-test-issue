angular.module('App', ['ngResource', 'LocalStorageModule', 'ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/movie', {
                    templateUrl: '../templates/movie.html',
                    controller: 'movieCtrl'
                });
            $routeProvider.otherwise({redirectTo: '/movie'});
        }])

    .service('sourcesCtrl', function () {
        let choosenMovie = [];
        return {
            getMovie() {
                return choosenMovie;
            },
            setMovie(movie) {
                choosenMovie = movie;
                return choosenMovie;
            },
        };
    });
