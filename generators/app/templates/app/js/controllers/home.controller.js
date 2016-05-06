/**
 * @author ctola
 */
(function() {
    angular
        .module('app')
        .controller('homeController',
            ['$http', homeController]);

    function homeController($http) {
        //vars
        var vm = this;
        vm.searchText = "";
        vm.counter = "30";
        //var functions
        vm.addSearch = addSearch;
        vm.clearSearch = clearSearch;
        vm.showAdvance = showAdvance;
        vm.showFormAdvance = showFormAdvance;
        //functions
        function showFormAdvance() {
            $('#form-advance').toggleClass("hide");
        }
        function showAdvance() {
            $('#advanced').toggleClass("hide");
            $('#form-advance').addClass("hide");
        }
        function addSearch() {
            vm.searchText = "from:\"\"";
        }
        function clearSearch() {
            vm.searchText = "";
        }

        $http.get("/users.json")
            .then(function(response) {
                //console.log($scope.items);
                vm.items = response.data.results;
                vm.itemssize = response.data.info.results;
                vm.itemspage = response.data.info.page;
                //console.log(vm.items);
            })
            .catch(function(error){
                console.log(error);
            });
    }
})();