var nancApp = angular.module('nancApp', ['ngRoute']);

nancApp.controller('nancAppCtrl', function ($scope) {
  $scope.categories = [
    {'name': 'Prewedding',
     'link': ''},
    {'name': 'Wedding',
     'link': ''},
    {'name': 'Travel',
     'link': ''},
    {'name': 'Portrait',
     'link': ''},
    {'name': 'Misc',
     'link': ''}
  ];
});