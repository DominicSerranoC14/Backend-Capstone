'use strict';

const app = angular.module('BECAP', ['ngRoute'])
  .config(($routeProvider, $locationProvider) => {

    $routeProvider
    .when('/', {
      controller: '',
      templateUrl: 'partials/main.html'
    })
    .otherwise('/');

    //Cleans up the url, does not use '!#' in url
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });

  });
