(function() {
  'use strict';

  angular
    .module('app')
    .factory('servicesFactory', ['$resource', servicesFactory]);

  function servicesFactory($resource) {
    return $resource(':resourceName.json',{},{
      query: {method: 'get', params:{resourceName:'test'}}
    });
  }
})();