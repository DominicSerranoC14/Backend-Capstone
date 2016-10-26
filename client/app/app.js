'use strict';

const app = angular.module('BECAP', ['ngRoute'])
  .config(($routeProvider, $locationProvider) => {

    $routeProvider
    .when('/', {
      controller: 'splashCtrl',
      templateUrl: 'partials/splash.html'
    })
    .when('/feed', {
      controller: 'postFeedCtrl',
      templateUrl: 'partials/postFeed.html'
    })
    .when('/profile', {
      controller: 'profileViewCtrl',
      templateUrl: 'partials/profileView.html'
    })
    .when('/register', {
      controller: 'registerFormCtrl',
      templateUrl: 'partials/registerForm.html'
    })
    .otherwise('/');

    //Cleans up the url, does not use '!#' in url
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  });
