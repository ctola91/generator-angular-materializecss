/**
 * @author ctola
 */
(function () {
    'use strict';
    
    angular
        .module('app')
        .filter('toUpper',toUpper);

    function toUpper() {
        return function(text) {
            if(text !== null) {
                return text.toUpperCase();
            }
        }
    }
})();