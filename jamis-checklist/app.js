(function(){
	'use strict';

	angular.module("ListCheckOff", [])
	.controller("ToCheckController", ToCheckController)
	.controller("AlreadyCheckedController", AlreadyCheckedController)
	.service("ListCheckOffService", ListCheckOffService)

	ToCheckController.$inject = ["ListCheckOffService"];
	function ToCheckController(ListCheckOffService) {
		var toBuy = this;
		toBuy.items = ListCheckOffService.getToCheckItems();
		
		toBuy.doItemChecked = function (itemIndex) {
			ListCheckOffService.doItemCheck(itemIndex);
		};
	}

	AlreadyCheckedController.$inject = ["ListCheckOffService"];
	function AlreadyCheckedController(ListCheckOffService) {
		var bought = this;
		bought.items = ListCheckOffService.getCheckedItems();
	}

	function ListCheckOffService() {
		var service = this;

		var checkedItems = [];
		var toCheckItems = [
			{ name: "Tennis Academia"},
			{ name: "Calça Academia"},
			{ name: "Blusa Academia"},
			{ name: "Top Academia"},
			{ name: "Liga de Cabelo"},
			{ name: "Garrafa d'agua"},
			{ name: "Marmitas pos-Treino"},
			{ name: "Almoço"},
			{ name: "Snack"},
			{ name: "Desodorante"},
			{ name: "Locker"},
			{ name: "Toalha"},
			{ name: "Liga de Cabelo*"}
		]

		service.getToCheckItems = function () {
			return toCheckItems;
		};

		service.getCheckedItems = function () {
			return checkedItems;
		};

		service.doItemCheck = function (itemIndex) {
			var item = toCheckItems[itemIndex];
			var newItem = { name: item.name };

			checkedItems.push(newItem);

			toCheckItems.splice(itemIndex, 1);

		};
	};

})();