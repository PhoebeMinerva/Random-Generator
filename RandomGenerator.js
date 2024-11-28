let heading = document.getElementById("title");
let todaysSillySaying = document.getElementById("todaysSillySaying");
let sillySentence = document.getElementById("generatedSentence");
let firstNoun = document.getElementById("nounOneInput");
let firstVerb = document.getElementById("verbOneInput");
let secondNoun = document.getElementById("nounTwoInput");

let possessives = ["My", "Your", "Our", "Their"]
let generatorsVerb = ["loves", "likes", "can't stand", "dislikes", "prefers"];


todaysSillySaying.addEventListener("click", function() {


	let oneNoun = firstNoun.value;
	let oneVerb = firstVerb.value;
	let anotherNoun = secondNoun.value;

	generate(oneNoun, oneVerb, anotherNoun);
	restyle()
	animateSentence()
});

function generate(incOneNoun, incOneVerb, incAnotherNoun) {

	let randomPossessivesIndex = Math.floor(Math.random() * possessives.length);
	let selectedRandomGeneratorsVerbIndex = Math.floor(Math.random() * generatorsVerb.length);
	let selectedRandomPossessive = possessives[randomPossessivesIndex];
	let selectedRandomGeneratorsVerb = generatorsVerb[selectedRandomGeneratorsVerbIndex]; 

	generatedSentence.innerText = selectedRandomPossessive + " " + incOneNoun + " " + selectedRandomGeneratorsVerb + " " + incOneVerb +  " and " + incAnotherNoun +".";
}

function restyle() {

	let randRed = Math.random() * 255;
	let randGreen = Math.random() * 255;
	let randBlue = Math.random() * 255;
	let otherRandRed = Math.random() * 255;
	let otherRandGreen = Math.random() * 255;
	let otherRandBlue = Math.random() * 255;	
	heading.style.color = "rgb("+randRed+","+randGreen+","+randBlue+")";
	sillySentence.style.backgroundColor = "black";
	sillySentence.style.color = "rgb("+otherRandRed+","+otherRandGreen+","+otherRandBlue+")";
	sillySentence.style.fontSize = "2em";
}

function animateSentence(){
	sillySentence.animate(
	{
	opacity: [0, 2],
	color: ["green", "e0e3d8"],
	easing: ["ease-in", "ease-out"],	
	},
	// 1000,
);
}





