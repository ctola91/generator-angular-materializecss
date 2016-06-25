(function() {
  'use strict';

  angular
    .module('app')
    .factory('servicesFactory', servicesFactory);
  
  servicesFactory.$inject = ['$resource'];

  function servicesFactory($resource) {
    return $resource('http://api.randomuser.me/?results=10',{},{
      query: {method: 'get', params:{}}
    });
  }
})();