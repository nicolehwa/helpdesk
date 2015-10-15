angular.module('AwesomeDesk', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        'use strict';

        $routeProvider
            .when('/dashboard', {
                templateUrl: 'dashboard.html'
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
                redirectTo: '/dashboard'
            });
    })

    .controller('main', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return $location.path().indexOf(viewLocation) == 0;
        };

    })
