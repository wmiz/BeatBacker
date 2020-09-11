let sounds = ["Clap", "Hihat", "Kick", "Openhat", "Boom", "Ride", "Snare", 
"Tom", "Tink"]

// Get parents
measures = document.querySelector("#measures");
extras = document.querySelector("#extras");

tempo = 60;

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
		soundDiv.appendChild(soundElement);
	}
	outerDiv.appendChild(element);
	outerDiv.appendChild(soundDiv);
	measures.appendChild(outerDiv);
}

// Populate extras
element = document.createElement("input")
element.classList.add("extra");
extras.appendChild(element);

element = document.createElement("button")
element.innerHTML = "START";
element.classList.add("extra");
extras.appendChild(element);

