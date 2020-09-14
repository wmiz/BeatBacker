let sounds = ["Clap", "Hihat", "Kick", "Openhat", "Boom", "Ride", "Snare", 
"Tom", "Tink", "Rest"]

// Get parents
const measures = document.querySelector("#measures");
const extras = document.querySelector("#extras");

let element;

// Populate measure boxes
for (i=0;i<4;i++) {
	outerDiv = document.createElement("div");
	outerDiv.classList.add("note-box");

	element = document.createElement("button");
	element.innerHTML = "Rest";
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

// Set up crement buttons
const crements = document.querySelectorAll("#crements button");
tempoBox = document.querySelector("input").value;
crements.item(0).addEventListener( "click", function() {
	document.querySelector("input").value = parseInt(document.querySelector("input").value) + 5;
	checkTempo()
});
crements.item(1).addEventListener( "click", function() {
	document.querySelector("input").value = parseInt(document.querySelector("input").value) + 1;
	checkTempo()
});
crements.item(2).addEventListener( "click", function() {
	document.querySelector("input").value = parseInt(document.querySelector("input").value) - 1;
	checkTempo()
});
crements.item(3).addEventListener( "click", function() {
	document.querySelector("input").value = parseInt(document.querySelector("input").value) - 5;
	checkTempo()
});

function checkTempo() {
	if (document.querySelector("input").value <= 0) {
		document.querySelector("input").value = 1;
	}
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
		let tempoMultiplier = getTempo() / 60;
		let timeInterval = 1000 / tempoMultiplier;

		soundsAudio = document.querySelectorAll("audio");
		let i=0
		beatz = setInterval(function() {
			if (soundsAudio.item(notesIndices[i]) && soundsAudio.item(notesIndices[i]) != 9) {
				soundsAudio.item(notesIndices[i]).currentTime = 0;
				soundsAudio.item(notesIndices[i]).play();
			}
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

	function getTempo() {
		return document.querySelector("input").value;
	}
	
});
