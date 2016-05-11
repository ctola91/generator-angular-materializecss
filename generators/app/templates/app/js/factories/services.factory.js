(function() {
  'use strict';

  angular
    .module('app')
    .factory('servicesFactory', ['$resource', servicesFactory]);

  function servicesFactory($resource) {
    return $resource('http://api.randomuser.me/?page=1&results=10',{},{
      query: {method: 'get', params:{}}
    });
  }
})();