const bloop = new Audio("Assets/sounds/holepunch.mp3");
const pen = new Audio("Assets/sounds/penclick.mp3");
// const bottle = new Audio("Assets/sounds/bottlecrush.mp3");

const bottle = new Audio("Assets/sounds/bottlecrush.wav");
const buttonHover = "buttonHover";
const checkHover = "checkHover";
//generate checkboxes & push in names of all question lists
const checkArray = [];
const fixedCheck = document.querySelector(".fixedCheck");
const removeCheck = document.querySelector(".removeCheck");
const check = fixedCheck.innerHTML
for(var i=1; i<allQuestions.length; i++){
	checkArray.push(check);
}
removeCheck.innerHTML = checkArray.concat()
const checkboxLabel = document.querySelectorAll(".checkboxLabel");
for(var i = 0; i<allQuestions.length; i++){
	checkboxLabel[i].textContent = allQuestions[i].name
}
const checkboxContent = document.querySelectorAll(".checkboxContent");
const chkBoxSquare = document.querySelectorAll(".chkBoxSquare")
//assign default of first 3 as checked
for(var i=1; i<4; i++){
	chkBoxSquare[i].classList.add("checkedBox");
}



//initialize: declare the card array and push the proper number (really every single) of cards 
const cardNum = allQuestions.length-1;
const cardNumArr = [];
const fixed = document.querySelector(".fixed");
const removable = document.querySelector(".removable");
generateCards();


function generateCards(type){

const card = fixed.innerHTML
for(var i = 0; i<cardNum; i++){
	cardNumArr.push(card);
}
removable.innerHTML=cardNumArr.concat()
}






const hardCard = document.querySelectorAll(".hardcard");
const quoteContainer = document.querySelectorAll(".quoteContainer");
const text = document.querySelectorAll(".text");
const quoteBox = document.querySelectorAll(".quoteBox");
const quoteText = document.querySelector(".quoteContainer");






const header = document.querySelector(".header");
const buttons = document.querySelectorAll("button");
for(var i = 0; i<hardCard.length; i++){
	buttons[i].textContent = allQuestions[i].name
	quoteContainer[i].style.backgroundImage = "url(Assets/images/" + allQuestions[i].image + ")";
}

//now make the cards that are not the first 3 display: none
for(var i=4; i<allQuestions.length; i++){
	hardCard[i].classList.add("uncheckedBox");
}

hoverHeader();
hoverButton(buttons, buttonHover);
hoverButton(chkBoxSquare, checkHover);
btnClick();
allClick();
all();





quoteContainer.forEach(function(element, index){
	if (element.textContent.length >= 175){
		quoteBox[(index)].classList.add("overflow")
	} else {
		quoteBox[(index)].classList.remove("overflow")
	}
})

//If box is checked/unchecked, apply display none to hardcard
checkboxContent.forEach(function(element, index){
	element.addEventListener("click", function (){
		pen.play();
		chkBoxSquare[(index)].classList.toggle("checkedBox");
		hardCard[(index)].classList.toggle("uncheckedBox");
	})
})


function newQuestion(type){
	for(var i = 0; i<allQuestions.length; i++){
		if (allQuestions[i].name === type) {
			const quote = allQuestions[i].questions[Math.floor(Math.random()*allQuestions[i].questions.length)]; 
			return quote.text;
		}
	}

}

function btnClick(){
	buttons.forEach(function(element, index){
		element.addEventListener("click", function(){
			text[(index)].textContent = newQuestion(element.textContent)
		})
	});
}



function all (){
	text.forEach(function(element, index){
		element.textContent = newQuestion(buttons[(index)].textContent)
	})
}
function allClick (){
	header.addEventListener("click", function(){
	text.forEach(function(element, index){
		element.textContent = newQuestion(buttons[(index)].textContent)
		bottle.play();
	})
})
}

header.addEventListener("click", all);
document.addEventListener("keydown", all);

function hoverHeader (){
header.addEventListener("mouseover", function(){
	this.classList.add("headerHover");
})
header.addEventListener("mouseout", function(){
	this.classList.remove("headerHover");
})
}

function hoverButton (type, style){
for(var i = 0; i<type.length; i++){
	type[i].addEventListener("mouseover", function (){
		this.classList.add(style);

	})
	type[i].addEventListener("mouseout", function (){
		this.classList.remove(style);
		
	})
}}

