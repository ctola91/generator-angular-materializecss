/**
 * @author ctola
 */
(function () {
    angular
        .module('app')
        .filter('toAdd',toAdd);

    function toAdd() {
        return function(text) {
            if(text != null) {
                return text.toUpperCase();
            }
        }
    }
})();