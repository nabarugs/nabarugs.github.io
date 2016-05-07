angular.module('NabaRugsApp', [])
  .controller('ProductsController', function ($scope, $http, $location) {

      $http.get('../assets/json/products.json')
       .then(function(res){
          $scope.categories = res.data.products.categories;             
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

