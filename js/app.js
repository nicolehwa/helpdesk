angular.module('AwesomeDesk', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        'use strict';

        $routeProvider
            .when('/login', {
                templateUrl: 'login.html'
            })

            .when('/dashboard', {
                templateUrl: 'dashboard.html'
            })

            .when('/issueboard', {
                templateUrl: 'issueboard.html'
            })

            .when('/manage', {
                templateUrl: 'manage.html'
            })

            .when('/manage/new', {
                templateUrl: 'new.html'
            })
            .when('/manage/view', {
                templateUrl: 'ticket.html'
            })
            .when('/report', {
                templateUrl: 'report.html'
            })
            .otherwise({
                redirectTo: '/issueboard'
            });
    })

    .controller('main', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return $location.path().indexOf(viewLocation) == 0;
        };

    })
