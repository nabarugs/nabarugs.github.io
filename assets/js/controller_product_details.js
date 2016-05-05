angular.module('NabaRugsApp', [])
  .controller('ProductDetailsController', function ($scope, $http) {

      $http.get('../assets/json/products.json')
       .then(function(res){
          $scope.products = res.data;
          alert($scope.products);               
        });
    
  });

