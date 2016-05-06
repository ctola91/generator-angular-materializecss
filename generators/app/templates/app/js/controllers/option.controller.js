/**
 * @author ctola
 */
(function() {
    angular
        .module('app')
        .controller('optionController',
            ['$http', optionController]);

    function optionController($http) {
        //vars
        var vm = this;
        vm.options = ["home","user","contact","find","help"];
    }
})();