( function()
{
    'use strict';
    angular.module('myFirstApp',[])
    .controller('MyFirstController', function($scope){
        $scope.name="xyz";
        $scope.helloFunc= function(){
            return "hello ,this is my first application"
        }

    });
})();