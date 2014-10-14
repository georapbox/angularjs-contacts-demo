'use strict';

// Declare app level module which depends on filters, and services
var contactsApp = angular.module('contactsApp', [
    'ui.router',
    'ngSanitize',
    'ngAnimate',
    'ngAnimate-animate.css',
    'contactsApp.filters',
    'contactsApp.services',
    'contactsApp.animations_services',
    'contactsApp.directives',
    'contactsApp.controllers'
]);

contactsApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    /* $locationProvider.hashPrefix('!'); */ // Throws error in IE8
    
    $urlRouterProvider.otherwise('/');

    $stateProvider.
        state('root', { // No hashbang on URL
            url: '',
            views: {
                'headerView': {
                    templateUrl: 'partials/header.html'
                },
                'catalogueView': {
                    templateUrl: 'partials/catalogue.html',
                    controller: 'CatalogueCtrl'
                }
            }
        }).
        state('/', {
            url: '/',
            views: {
                'headerView': {
                    templateUrl: 'partials/header.html'
                },
                'catalogueView': {
                    templateUrl: 'partials/catalogue.html',
                    controller: 'CatalogueCtrl'
                }
            }
        }).
        state('catalogue', {
            url: '/catalogue',
            views: {
                'headerView': {
                    templateUrl: 'partials/header.html'
                },
                'catalogueView': {
                    templateUrl: 'partials/catalogue.html',
                    controller: 'CatalogueCtrl'
                }
            }
        }).
        state('catalogue.delete', {
            url: '/delete/:contactID',
            views: {
                'deleteView': {
                    templateUrl: 'partials/catalogue.delete.html',
                    controller: 'DeleteContactCtrl'       
                }
            }    
        }).
        state('catalogue.add', {
            url: '/add',
            views: {
                'addView': {
                    templateUrl: 'partials/catalogue.add.html',
                    controller: 'AddContactCtrl'
                }
            }
        });
});