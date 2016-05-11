(function() {
  'use strict';

  angular
    .module('app')
    .factory('servicesFactory', ['$resource', servicesFactory]);

  function servicesFactory($resource) {
    return $resource(':resourceName',{},{
      query: {method: 'get', params:{resourceName:'http://api.randomuser.me/?page=1&results=10'}}
    });
  }
})();