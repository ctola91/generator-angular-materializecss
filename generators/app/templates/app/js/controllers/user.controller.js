/**
 * @author ctola
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('userController',
            ['servicesFactory', userController]);

    function userController(servicesFactory) {
        //vars
        var vm = this;
        vm.contacts = {};
        vm.userList = userList;
        //code
        vm.userList();
        
        //functions
        function userList () {
             vm.contacts = servicesFactory.query();
        }
    }
})();