document.addEventListener("keydown", handleKeyPress);

let currentValue = "";

function updateDisplay(value) {
	document.querySelector('input[name="display"]').value = value;
}

function handleKeyPress(event) {
	const key = event.key;
	const allowedKeys = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"+",
		"-",
		"*",
		"/",
		".",
		"Enter",
		"Escape",
		"Backspace",
	];

	if (allowedKeys.includes(key)) {
		if (key === "Enter") {
			calculateResult();
		} else if (key === "Escape") {
			clearDisplay();
		} else if (key === "Backspace") {
			deleteLastChar();
		} else {
			appendToDisplay(key);
		}
	}
}

function appendToDisplay(value) {
	currentValue += value;
	updateDisplay(currentValue);
}

function calculateResult() {
	try {
		const result = eval(currentValue);
		updateDisplay(result);
		currentValue = result.toString();
	} catch (error) {
		updateDisplay("Ungültiger Ausdruck");
		currentValue = "";
	}
}

function clearDisplay() {
	currentValue = "";
	updateDisplay("");
}

function deleteLastChar() {
	currentValue = currentValue.slice(0, -1);
	updateDisplay(currentValue);
}

document.querySelectorAll('input[type="button"]').forEach((button) => {
	button.addEventListener("click", () => {
		appendToDisplay(button.value);
	});
});
