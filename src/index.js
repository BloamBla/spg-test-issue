import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'angular';
import 'angular-resource';
import 'angular-local-storage';
import '../styles/main.scss';
import './modules/main-module.js';

angular.module('App').controller('mainController',
    function ($scope, $http) {

        $scope.choosenMovie = [];
        $scope.imgLinks = [];
        $scope.movies = [];
        $scope.videoLinks = [];

        $http({method: 'GET', url: './data.json'}).then(function success(response) {
            $scope.movies = response.data;
            $scope.choosenMovie = $scope.movies[0];
            for (let i = 0; i < $scope.movies.length; i++) {
                $scope.imgLinks = $scope.imgLinks.concat($scope.movies[i].preview);
                $scope.videoLinks[i] = [];
                $scope.videoLinks[i] = $scope.videoLinks[i].concat($scope.movies[i].preview);
                if (i === 0) {
                    $scope.videoLinks[i] = $scope.videoLinks[i].concat('video/' + $scope.movies[i].video[0]);
                    $scope.videoLinks[i] = $scope.videoLinks[i].concat('video/' + $scope.movies[i].video[1]);
                } else $scope.videoLinks[i] = $scope.videoLinks[i].concat($scope.movies[i].video);
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

        $scope.switchVideo = function(n, item) {
            let link;
            document._video = document.getElementById("video");
            let m4v = document.getElementById("m4v");
            if (n >= $scope.videoLinks.length) n = 0;

            let mp4 = document.getElementById("mp4");
            let parent = mp4.parentNode;

            link = './src/img/' + $scope.videoLinks[n][0];
            document._video.setAttribute("poster", link);
            link = './src/' + $scope.videoLinks[n][1];
            mp4.setAttribute("src", link);

            if ($scope.videoLinks[n][2]) {
                if (m4v.parentNode == null) {
                    parent.insertBefore(m4v, mp4);
                }
                link = './src/' + $scope.videoLinks[n][2];
                m4v.setAttribute("src", link);
            } else {
                if (m4v) {
                    if (m4v.parentNode != null) {
                        parent.removeChild(m4v);
                    }
                }
            }
            $scope.choosenMovie = item;
            document._video.load();
        }

    });