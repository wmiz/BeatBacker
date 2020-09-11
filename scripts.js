let sounds = ["Clap", "Hihat", "Kick", "Openhat", "Boom", "Ride", "Snare", 
"Tom", "Tink"]

// Get parents
const measures = document.querySelector("#measures");
const extras = document.querySelector("#extras");

let tempo = 60;

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
startButton = document.querySelector("#start-button");
startButton.addEventListener("click", function() {
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
	for (let i=0;i<notesIndices.length;i++) {
		setTimeout(function() {
			console.log(soundsAudio.item(notesIndices[i]).play());
		}, timeInterval * i);
	}
});
