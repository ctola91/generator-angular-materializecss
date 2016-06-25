/**
 * @author ctola
 */
angular
    .module("app")
    .config(appConfig);

appConfig.$inject =['$stateProvider', '$urlRouterProvider'];

function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: "views/home.html",
            controller: "HomeController as vm"
        })
        .state('user', {
            url: '/user',
            templateUrl: "views/user.html",
            controller: "UserController as vm"
        })
        .state('option', {
            url: '/option',
            templateUrl: "views/option.html",
            controller: "OptionController as vm"
        });
}