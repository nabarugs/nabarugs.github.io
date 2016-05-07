angular.module('NabaRugsApp', [])
  .controller('ProductsController', function ($scope, $http, $location) {

      $http.get('../assets/json/products.json')
       .then(function(res){
          $scope.categories = res.data.products.categories;             
        })
       .then(function(){
       	 associateProductsClickAction();
       });
  });

