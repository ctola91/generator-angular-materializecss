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
            templateUrl: "js/templates/home.html",
            controller: "homeController as vm"
        })
        .state('user', {
            url: '/user',
            templateUrl: "js/templates/user.html",
            controller: "userController as vm"
        })
        .state('option', {
            url: '/option',
            templateUrl: "js/templates/option.html",
            controller: "optionController as vm"
        });
}