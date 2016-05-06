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
            templateUrl: "/js/templates/home.html",
            controller: "homeController as vm"
        });
}