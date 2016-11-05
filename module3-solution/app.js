(function(){
'use strict';

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive('foundItemss', FoundItemsDirective)

function FoundItemsDirective() {
	var ddo = {
		templateUrl: "found-items-template.html",
		scope: {
			onRemove: '&',
			foundItems: '<'
		}
	};

	return ddo;
}


NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController(MenuSearchService) {
	var controller = this;
	controller.searchTerm = "";
	controller.found = [];
	
	controller.findMatchedMenuItems = function () {
		console.log("this: ", this);
		var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);

		promise.then(function (response) {
			console.log("response: ",response);
			controller.found = response;
		});
		// controller.found = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
		// controller.found = controller.found.$$state.value;
		// console.log("found: ", controller.found);
		// for (var i = 0; i < controller.found.length; i++) {
		// 	console.log("found[i]", controller.found[i]);
		// 	console.log("found[i].name", controller.found[i].name);
		// }
	};

	controller.removeItem = function (itemIndex) {
		controller.found.splice(itemIndex, 1);
	};
}


MenuSearchService.$inject = ["$http"];
function MenuSearchService($http) {
	var service = this;

	service.getMatchedMenuItems = function(searchTerm) {
		var promise = getMenuItems();
		console.log("searchTerm: ", searchTerm);

		return promise.then(function (response) {
	    var foundItems = response.data;
	    console.log("foundItems", foundItems);
	    foundItems = foundItems.menu_items;
	    var matchedItems = [];

	    for (var i = 0; i < foundItems.length; i++) {
	    	var description = foundItems[i].description;
	    	if (description.toLowerCase().indexOf(searchTerm) !== -1) {
	    		matchedItems.push(foundItems[i]);
	    	}
	    }
	    console.log("matched: ", matchedItems);
	    return matchedItems;
	  })
	  .catch(function (error) {
	    console.log("Something went terribly wrong.");
	  });
	};

	var getMenuItems = function() {
		var response = $http({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/menu_items.json"
		});

		return response;
	};

}


})();