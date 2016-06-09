/**
 * @author ctola
 */
angular
    .module("app")
    .config(appConfig);

function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: "views/home.html",
            controller: "homeController as vm"
        })
        .state('user', {
            url: '/user',
            templateUrl: "views/user.html",
            controller: "userController as vm"
        })
        .state('option', {
            url: '/option',
            templateUrl: "views/option.html",
            controller: "optionController as vm"
        });
}