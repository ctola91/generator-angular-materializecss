/**
 * @author ctola
 */
(function() {
    angular
        .module('app')
        .controller('userController',
            ['$http', userController]);

    function userController($http) {
        //vars
        var vm = this;
        vm.user = {
          name: "chris",
          last: "tola"
        }
    }
})();