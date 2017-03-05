'use strict';

/**
 * Created by hapresto on 2/14/17.
 */

angular.module('imapex')
    .controller('MainCtrl',
        function($scope, $location, $anchorScroll) {
            $scope.welcome = "Welcome to imapex!";
            $scope.scrollTo = function(id) {
                $location.hash(id);
                $anchorScroll();
            }
        }
    );

