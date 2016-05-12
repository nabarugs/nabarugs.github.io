angular.module('NabaRugsApp', [])
  .controller('ProductsController', function ($scope, $http, $location) {

      $http.get('../assets/json/products.json')
       .then(function(res){
          jsonObject = angular.fromJson(res.data);
          $scope.categories = jsonObject.products.categories;
          var catId = $location.search()['cid'];
          console.log(catId);            
        });

       $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
    	  associateProductsClickAction();
		});
  })
  .directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    }
});

