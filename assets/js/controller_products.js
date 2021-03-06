angular.module('NabaRugsApp', [])
  .controller('ProductsController', function ($scope, $http, $location, $filter) {

      $http.get('../assets/json/products.json')
       .then(function(res){
          jsonObject = angular.fromJson(res.data);
          var cid = parseInt($location.search()['cid']);
          $scope.allCat = jsonObject.products.categories;

          if(cid==1000)
            $scope.visibleCat = $scope.allCat;
          else
            $scope.visibleCat = [$filter('filter')($scope.allCat,{id:cid})[0]];            
        });

       $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
    	  associateProductsClickAction();
		  
      $scope.reloadPage = function(){
        location.reload();
      };

//      $scope.createImagesString = function(cid, images){
 //       imgs="";
 //       imagesArray = images.split(',');
 //       angular.forEach(imagesArray, function(value, key){
 //         imgs += "../assets/images/products/cid"+cid+"/"+value+",";
//        });
 //       retrun imgs;
 //     };

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

