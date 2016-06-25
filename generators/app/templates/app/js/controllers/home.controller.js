/**
 * @author ctola
 */
(function() {
    angular
        .module('app')
        .controller('HomeController', HomeController);

    function HomeController() {
        //vars
        /* jshint validthis: true */
        var vm = this;
        vm.text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";
    }
})();