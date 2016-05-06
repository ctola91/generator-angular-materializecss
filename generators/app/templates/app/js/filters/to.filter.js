/**
 * @author ctola
 */
(function () {
    angular
        .module('app')
        .filter('toUpper',toAdd);

    function toAdd() {
        return function(text) {
            if(text != null) {
                return text.toUpperCase();
            }
        }
    }
})();