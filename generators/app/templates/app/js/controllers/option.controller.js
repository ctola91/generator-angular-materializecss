/**
 * @author ctola
 */
(function() {
    angular
        .module('app')
        .controller('OptionController',OptionController);

    function OptionController() {
        //vars
        /* jshint validthis: true */
        var vm = this;
        vm.options = ["home","user","contact","find","help"];
    }
})();