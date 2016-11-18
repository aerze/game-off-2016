var terminal = {
	consoleOutputArray: [],

	printConsole: function() {
		var consoleOutput = document.getElementById('js-consoleOutput'),
				consoleOutputArray = this.consoleOutputArray,
				fragment = document.createDocumentFragment();

		consoleOutput.innerHTML = "";

		for (var i=0, x=consoleOutputArray.length; i<x; i++) {
			var outputLine = document.createElement("div");
			outputLine.appendChild(document.createTextNode(consoleOutputArray[i]));
			fragment.appendChild(outputLine);
		}
		consoleOutput.appendChild(fragment);
	},

	commandEntered: function() {
		var input = document.getElementById('js-consoleInput'),
		inputValue = input.value;
		this.consoleOutputArray.push(inputValue);
		this.printConsole();
		input.value = "";
		input.focus();
	},

	giveInputFocus: function() {
		var input = document.getElementById('js-consoleInput'),
				consoleBox = document.getElementById('js-consoleBox');

		input.focus();

		consoleBox.addEventListener('click', function(){
			input.focus();
		});
	}
};

(function() {
	terminal.giveInputFocus();
})();

/////////////////////
//TO DO
// - if input has focus and enter key hit, call commandEntered function
// - on window ready,
// ---- input has focus
// ---- run event listeners, when terminal is clicked, input given focus

//////////////////////////////


// var groceries = {
// 	groceryList: [
// 		{
// 			item: "bananas",
// 			status: "unchecked"
// 		},
// 		{
// 			item: "spinach",
// 			status: "unchecked"
// 		},
// 		{
// 			item: "maca powder",
// 			status: "unchecked"
// 		},
// 		{
// 			item: "yams",
// 			status: "unchecked"
// 		},
// 		{
// 			item: "sweet potatos",
// 			status: "unchecked"
// 		},
// 		{
// 			item: "water",
// 			status: "unchecked"
// 		},
// 		{
// 			item: "dates",
// 			status: "unchecked"
// 		}
// 	],
// 	addItem: function(item) {
// 		var itemObject = {
// 			item: item,
// 			status: "unchecked"
// 		}
// 		this.groceryList.push(itemObject);
// 		this.printList();
// 	},
// 	removeItem: function(item) {
// 		var groceryList = this.groceryList;

// 		for (var i=0; i < groceryList.length; i++) {
// 			if (groceryList[i].item === item) {
// 				groceryList.splice(i, 1)[0];
// 				this.printList();
// 			}
// 		}
// 	},
// 	clickCheckbox: function(event) {
// 		var itemName = this.innerText;

// 		var updateStatus = function(itemObject) {
// 			if (itemObject.item === itemName) {
// 				if (itemObject.status === "checked") {
// 					itemObject.status = "unchecked";
// 				} else {
// 					itemObject.status = "checked";
// 				}
// 			}
// 			return itemObject;
// 		}

// 		var newList = groceries.groceryList.map(updateStatus);

// 		groceries.groceryList = newList;
// 		groceries.printList();
// 	},
// 	printList: function() {
// 		var ulTag = document.getElementById("ulTag"),
// 				groceryList = this.groceryList,
// 				fragment = document.createDocumentFragment();
// 		ulTag.innerHTML = "";

// 		for (var i = 0, x = groceryList.length; i < x; i++) {
// 			var listItem = document.createElement("li"),
// 					checkbox = document.createElement("input");
// 			listItem.addEventListener('click', this.clickCheckbox);
		
// 			checkbox.setAttribute("type", "checkbox");

// 			if (groceryList[i].status === "checked") {
// 				checkbox.setAttribute("checked", "");
// 			}

// 			listItem.appendChild(checkbox);
// 			listItem.appendChild( document.createTextNode(groceryList[i].item) );
// 			fragment.appendChild(listItem);
// 		}

// 		ulTag.appendChild(fragment);
// 	}
// }
// groceries.printList();