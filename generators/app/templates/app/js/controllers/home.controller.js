/**
 * @author ctola
 */
(function() {
    angular
        .module('app')
        .controller('homeController',
            ['$http', homeController]);

    function homeController($http) {
        //vars
        var vm = this;
        vm.text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";
    }
})();