let input = "";

function appendInput(value) {
	input += value;
	document.getElementById("result").value = input;
}

function clearResult() {
	input = "";
	document.getElementById("result").value = "";
}

function calculate() {
	try {
		let result = eval(input);
		input = result.toString();
		document.getElementById("result").value = input;
	} catch (e) {
		alert("Invalid expression");
	}
}