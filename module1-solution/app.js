(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.lunchList = "";
  $scope.message = "";

  $scope.checkLunchList = function () {
    var numOfItems = processList($scope.lunchList);
    $scope.message = processMessage(numOfItems);
  };

  function processList(lunchList) {
    var listOfItems = lunchList.split(",");
    var numOfItems = 0;
    for (var i = 0; i < listOfItems.length; i++) {
      if (listOfItems[i].trim() != "") numOfItems++;
    }
    return numOfItems;
  }

  function processMessage(numOfItems) {
    if (numOfItems >= 1 && numOfItems <= 3) {
      return "Enjoy!";
    } else if (numOfItems >= 4) {
      return "Too much!";
    }
    else {
      return "Please enter data first";
    }
  }
}


})();
