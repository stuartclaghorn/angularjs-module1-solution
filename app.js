(function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope)
 {
   $scope.msgclass="text-success";
   $scope.msg = "";
   $scope.items = "";

   $scope.countItems = function () {
     var item_count = 0;
     var itemsArray = $scope.items.split(",");
     var item_count = itemsArray.length;
     if ($scope.items == "") {
       $scope.msgclass='text-danger';
       $scope.msg = "Please enter data first"
     } else if (item_count > 3) {
       $scope.msgclass='text-success';
       $scope.msg = "Too much!";
     } else {
       $scope.msgclass='text-success';
       $scope.msg = "Enjoy!";
     }
   }
}

})();
