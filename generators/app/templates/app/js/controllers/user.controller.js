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
        vm.users = [
        {
            id: 1,
          name: "chris",
          last: "tola"
        },
        {
            id: 2,
            name: "juan",
            last: "Perez"
        },
        {
            id: 3,
            name: "deep",
            last: "blue"
        }
        ]
    }
})();