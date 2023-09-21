// Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function () {
	let buttons = document.getElementsByTagName("button");

	for (let button of buttons) {
		button.addEventListener("click", function () {
			if (this.getAtrribute("data-type") === "submit") {
				alert("You clicked submit!");
			} else {
				let gameType = this.getAttribute("data-type");
				alert(`You clicked $(gameType)`);
			}
		});
	}
});

function runGame() {
	// Create 2 random numbers between 1 and 25

	let num1 = Math.floor(Math.random() * 25) + 1;
	let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementIncorrectScore() {}

function displayAdditionQuestion() {}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}

function displayDivisionQuestion() {}
