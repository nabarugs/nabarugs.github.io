angular.module('NabaRugsApp', [])
  .controller('ProductsController', function ($scope, $http, $location, $filter) {

      $http.get('../assets/json/products.json')
       .then(function(res){
          jsonObject = angular.fromJson(res.data);
          var cid = parseInt($location.search()['cid']);
          console.log(cid);
          $scope.categories = jsonObject.products.categories;
          $scope.visibleCat = $filter('filter')($scope.categories,{id:cid})[0];
          console.log($scope.visibleCat);            
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

