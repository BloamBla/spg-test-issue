angular.module('App')
    .controller('movieCtrl', function ($scope, sourcesCtrl) {
        $scope.movie = sourcesCtrl.getMovie();
        $scope.movie.play = false;

        $scope.whenLoad = function () {
            $scope.movie = sourcesCtrl.getMovie();
            document.getElementById('video').setAttribute('poster', 'src/img/' + $scope.movie.preview);
            if (typeof($scope.movie.video) === 'object') {
                document.getElementById('link').setAttribute('src', './src/video/' + $scope.movie.video[0]);
            } else {
                document.getElementById('link').setAttribute('src', './src/' + $scope.movie.video);
            }
            document.getElementById('video').load();
            if ($scope.movie.play === true) {
                document.getElementById('video').setAttribute('autoplay', '');
            }
        };

    });
