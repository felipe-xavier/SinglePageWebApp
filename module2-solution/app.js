(function(){
	'use strict';

	angular.module("ShoppingListCheckOff", [])
	.controller("ToBuyController", ToBuyController)
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService)

	ToBuyController.$inject = ["ShoppingListCheckOffService"];
	function ToBuyController(ShoppingListCheckOffService) {
		var toBuy = this;
		toBuy.items = ShoppingListCheckOffService.getToBuyItems();
		
		toBuy.doItemBought = function (itemIndex) {
			ShoppingListCheckOffService.doItemBought(itemIndex);
		};
	}

	AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var bought = this;
		bought.items = ShoppingListCheckOffService.getBoughtItems();
	}

	function ShoppingListCheckOffService() {
		var service = this;

		var boughtItems = [];
		var toBuyItems = [
			{ name: "Cookies", quantity: 10 },
			{ name: "Chips", quantity: 15 },
			{ name: "Vodka", quantity: 5 },
			{ name: "Redbull", quantity: 15 },
			{ name: "Water", quantity: 15 }
		]

		service.getToBuyItems = function () {
			return toBuyItems;
		};

		service.getBoughtItems = function () {
			return boughtItems;
		};

		service.doItemBought = function (itemIndex) {
			var item = toBuyItems[itemIndex];
			var newItem = { name: item.name, quantity: item.quantity };

			boughtItems.push(newItem);

			toBuyItems.splice(itemIndex, 1);

		};
	};

})();