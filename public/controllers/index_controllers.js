angular.module('myapp.controllers').controller('MyController', function ($scope) {
    this.message = 'Hello from controller 1';
}).controller('MyController2', function ($scope) {
    $scope.message = 'Hello from controller 2';
});