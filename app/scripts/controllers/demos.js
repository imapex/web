'use strict';

/**
 * Created by hapresto on 2/14/17.
 */

angular.module('imapex')
    .controller('DemosCtrl',
        function($scope, demos, $location, $anchorScroll) {
            $scope.welcome = "Welcome to imapex!";
            $scope.scrollTo = function(id) {
                $location.hash(id);
                $anchorScroll();
            };
            $scope.demos = demos;

            // initialize filter object
            $scope.filter = "";

            // reset the filter
            $scope.resetFilter = function() {
                // set filter object back to blank
                $scope.filter = "";
            }

        }
    );

