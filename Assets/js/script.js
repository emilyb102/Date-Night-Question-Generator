//initialize: declare the card array and push the proper number of cards 
generateCards();




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
hoverHeader();
hoverButton();
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


function generateCards(){
	const cardNum = 3;
const cardNumArr = [];
const fixed = document.querySelector(".fixed");
const removable = document.querySelector(".removable");
const card = fixed.innerHTML
for(var i = 0; i<cardNum; i++){
	cardNumArr.push(card);
}
removable.innerHTML=cardNumArr.concat()
}

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

function hoverButton (){
for(var i = 0; i<buttons.length; i++){
	buttons[i].addEventListener("mouseover", function (){
		this.classList.add("buttonHover");
	})
	buttons[i].addEventListener("mouseout", function (){
		this.classList.remove("buttonHover");
	})
}}
