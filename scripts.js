let sounds = ["Clap", "Hihat", "Kick", "Openhat", "Boom", "Ride", "Snare", 
"Tom", "Tink"]

// Get parents
const measures = document.querySelector("#measures");
const extras = document.querySelector("#extras");

let tempo = 180;

let element;

// Populate measure boxes
for (i=0;i<4;i++) {
	outerDiv = document.createElement("div");
	outerDiv.classList.add("note-box");

	element = document.createElement("button");
	element.innerHTML = i + 1;
	element.classList.add("top")

	soundDiv = document.createElement("div");
	soundDiv.classList.add("sound-dropdown-box");
	for (k=0;k<sounds.length;k++) {
		soundElement = document.createElement("button")
		soundElement.innerHTML = sounds[k];
		soundElement.classList.add("sound-box");

		soundElement.addEventListener("click", function() {
			this.parentElement.parentElement.firstChild.innerHTML = this.innerHTML;
		});

		soundDiv.appendChild(soundElement);
	}
	outerDiv.appendChild(element);
	outerDiv.appendChild(soundDiv);
	measures.appendChild(outerDiv);
}

// Play sounds
function getControl() {
	return document.querySelector("#control");
}
let beatz;
getControl().addEventListener("click", function() {
	if (getControl().innerHTML == "START") {
		// Set to STOP
		getControl().classList.add("stop-button");
		getControl().classList.remove("start-button");
		getControl().innerHTML = "STOP";

		// Get note text
		let notes = Array.from(measures.children);
		let notesText = [];
		notes.forEach(e => notesText.push(e.firstChild.innerHTML));
		
		// Get note text index
		let notesIndices = [];
		notesText.forEach(e => notesIndices.push(sounds.indexOf(`${e}`)));

		// Play notes
		let tempoMultiplier = tempo / 60;
		let timeInterval = 1000 / tempoMultiplier;

		soundsAudio = document.querySelectorAll("audio");
		let i=0
		beatz = setInterval(function() {
			soundsAudio.item(notesIndices[i]).currentTime = 0;
			soundsAudio.item(notesIndices[i]).play();
			console.log(i)
			console.log(notesIndices.length - 1)
			i++;
			if (i==notesIndices.length) {
				i = 0;
			}
		}, timeInterval);
	} else {
		// Set to Start
		getControl().innerHTML = "START";
		getControl().classList.remove("stop-button");
		getControl().classList.add("start-button");

		clearInterval(beatz);
	}

	
});
