//Sound Effects
const button = new Audio("Assets/sounds/buttontap.wav");
const pen = new Audio("Assets/sounds/penclick.mp3");
const bottle = new Audio("Assets/sounds/bottlecrush.wav");

//Initialization Constants
const fixedCheck = document.querySelector("div.checkboxribbon .fixed");
const variableCheck = document.querySelector("div.checkboxribbon .variable");
const checkNum = allQuestions.length - 1;
const checkArray = [];
const fixed = document.querySelector("div.hardcardRibbon .fixed");
const variable = document.querySelector("div.hardcardRibbon .variable");
const cardNum = allQuestions.length - 1;
const cardNumArr = [];

//Initialize: generate & push in # of checkboxes & hardcards, based on index of allQuestions
generateFromFixedSkeleton(allQuestions, checkArray, fixedCheck, variableCheck);
generateFromFixedSkeleton(allQuestions, cardNumArr, fixed, variable);

//Post initialization constants
const checkboxLabel = document.querySelectorAll(".checkboxLabel");
const hardCard = document.querySelectorAll(".hardcard");
const buttons = document.querySelectorAll("button");
const quoteContainer = document.querySelectorAll(".quoteContainer");
const chkBoxSquare = document.querySelectorAll(".chkBoxSquare")
const checkboxContent = document.querySelectorAll(".checkboxContent");
const text = document.querySelectorAll(".text");
const header = document.querySelector(".header");
const quoteBox = document.querySelectorAll(".quoteBox");

//Label: put in checkbox labels, and hard card label and picture
//.....Checkboxes......
for (var i = 0; i < allQuestions.length; i++) {
	checkboxLabel[i].textContent = allQuestions[i].name
}
//.....Hardcards.......
for (var i = 0; i < hardCard.length; i++) {
	buttons[i].textContent = allQuestions[i].name
	quoteContainer[i].style.backgroundImage = "url(Assets/images/" + allQuestions[i].image + ")";
}

//Control: make first 3 checkboxes always checked, and make cards that aren't first 3 display 'none'
//.....Checkbox checks.......
for (var i = 1; i < 4; i++) {
	chkBoxSquare[i].classList.add("checkedBox");
}
//.......Hardcard display.........
for (var i = 4; i < allQuestions.length; i++) {
	hardCard[i].classList.add("uncheckedBox");
}

//Checkbox logic: connect checkboxes & hardcards
//If box is checked/unchecked, apply display none to hardcard + Styling
checkboxContent.forEach(function (element, index) {
	element.addEventListener("click", function () {
		pen.play();
		chkBoxSquare[(index)].classList.toggle("checkedBox");
		hardCard[(index)].classList.toggle("uncheckedBox");
	})
})

//Questions: Generate new question for each box
all();


//Question logic, when a button or header is clicked (or any new key pressed), generate new question/s
allClick();
btnClick();
header.addEventListener("click", all);
document.addEventListener("keydown", all);

//Styling: hover, text control
//.....Hover.....
hoverStyle(header, "headerHover");
hoverStyle(buttons, "buttonHover");
hoverStyle(chkBoxSquare, "checkHover");
//.....Text control.....
quoteContainer.forEach(function (element, index) {
	if (element.textContent.length >= 175) {
		quoteBox[(index)].classList.add("overflow");
	} else {
		quoteBox[(index)].classList.remove("overflow");
	}
})




//Functions
function generateFromFixedSkeleton(controlArray, emptyArray, fixed, variable) {
	for (var i = 0; i < controlArray.length - 1; i++) {
		emptyArray.push(fixed.innerHTML);
	}
	variable.innerHTML = emptyArray.join('');
}
function all() {
	text.forEach(function (element, index) {
		element.textContent = newQuestion(buttons[(index)].textContent)
	})
}
function allClick() {
	header.addEventListener("click", function () {
		text.forEach(function (element, index) {
			element.textContent = newQuestion(buttons[(index)].textContent)
			bottle.play();
		})
	})
}
function btnClick() {
	buttons.forEach(function (element, index) {
		element.addEventListener("click", function () {
			button.play();
			text[(index)].textContent = newQuestion(element.textContent)
		})
	});
}
function newQuestion(type) {
	for (var i = 0; i < allQuestions.length; i++) {
		if (allQuestions[i].name === type) {
			const quote = allQuestions[i].questions[Math.floor(Math.random() * allQuestions[i].questions.length)];
			return quote.text;
		}
	}
}
function hoverStyle(element, style) {
	if (element.length === undefined) {
		element.addEventListener("mouseover", function () {
			this.classList.add(style);
		})
		element.addEventListener("mouseout", function () {
			this.classList.remove(style);
		})
	} else {
		element.forEach(function (element) {
			element.addEventListener("mouseover", function () {
				this.classList.add(style);
			})
			element.addEventListener("mouseout", function () {
				this.classList.remove(style);
			})
		})
	}
}
















