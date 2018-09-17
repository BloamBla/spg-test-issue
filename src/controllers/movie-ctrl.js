angular.module('App')
    .controller('movieCtrl', function ($scope, sourcesCtrl) {
        $scope.movie = sourcesCtrl.getMovie();
        $scope.movie.play = false;

        $scope.whenLoad = function () {
            $scope.movie = sourcesCtrl.getMovie();
            $scope.posterSrc = 'src/img/' + $scope.movie.preview;
            if (typeof($scope.movie.video) === 'object') {
                $scope.sourceSrc = './src/video/' + $scope.movie.video[0];
            } else {
                $scope.sourceSrc = './src/' + $scope.movie.video;
            }
            document.getElementById('video').load();
            if ($scope.movie.play === true) {
                setTimeout(function () {
                    document.getElementById('video').play();
            }, 1500);
            }
        };

    });
