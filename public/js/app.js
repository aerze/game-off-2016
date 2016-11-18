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
	},

	readyInput: function() {
		var input = document.getElementById('js-consoleInput');
		var onEnterPress = function(e) {
			if (e.keyCode === 13) {
				terminal.commandEntered();
				input.focus();
			}
		}
		input.addEventListener("keypress", onEnterPress);
	}
};

(function() {
	terminal.giveInputFocus();
	terminal.readyInput();
})();

/////////////////////
//TO DO
// - if input has focus and enter key hit, call commandEntered function

//////////////////////////////
