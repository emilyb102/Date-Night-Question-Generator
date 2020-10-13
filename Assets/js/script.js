const gentleText = document.getElementById("gentleText");
const goofyText = document.getElementById("goofyText");
const inspiredText = document.getElementById("inspiredText");

const gentleBtn = document.getElementById("gentleBtn");
const goofyBtn = document.getElementById("goofyBtn");
const inspiredBtn = document.getElementById("inspiredBtn");
const headerBtn = document.querySelector("p");

gentleBtn.addEventListener("click", function(){
	gentleText.textContent = newQuestion(Gentle);
});

goofyBtn.addEventListener("click", function(){
	goofyText.textContent = newQuestion(Goofy);
});

inspiredBtn.addEventListener("click", function(){
	inspiredText.textContent = newQuestion(Inspired);
});

headerBtn.addEventListener("click", function(){
	gentleText.textContent = newQuestion(Gentle);
	goofyText.textContent = newQuestion(Goofy);
	inspiredText.textContent = newQuestion(Inspired);
})





function newQuestion (type){
	const quote = type[Math.floor(Math.random()*type.length)];
	return quote.text; 
}