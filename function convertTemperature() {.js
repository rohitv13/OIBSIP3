// Get the elements
const tempInput = document.querySelector("#temp-input");
const tempUnit = document.querySelector("#temp-unit");
const convertBtn = document.querySelector("#convert-btn");
const result = document.querySelector("#result");

// Listen for the button click
convertBtn.addEventListener("click", () => {
	// Get the input value
	const temp = parseFloat(tempInput.value);

	// Check if the input is a number
	if (isNaN(temp)) {
		alert("Please enter a valid number!");
		return;
	}

	// Get the selected unit
	const unit = tempUnit.value;

	// Convert the temperature
	let convertedTemp;
	if (unit === "celsius") {
		convertedTemp = (temp * 9/5) + 32;
		result.innerHTML = `${temp} &deg;C = ${convertedTemp.toFixed(1)} &deg;F`;
	} else if (unit === "fahrenheit") {
		convertedTemp = (temp - 32) * 5/9;
		result.innerHTML = `${temp} &deg;F = ${convertedTemp.toFixed(1)} &deg;C`;
	}
});
