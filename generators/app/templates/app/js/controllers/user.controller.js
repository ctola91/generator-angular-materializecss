/**
 * @author ctola
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('UserController',
            ['servicesFactory', UserController]);

    UserController.$inject = ['servicesFactory'];
    
    function UserController(servicesFactory) {
        //vars
        /* jshint validthis: true */
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