    'use strict';

    var myApp = angular.module('myApp',[]);

    myApp.controller('myCtrl', ['$scope',function($scope) {
        $scope.firstName= "John";
        $scope.lastName= "Doe";
    }]);
