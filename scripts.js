// Populate measure boxes
measures = document.querySelector("#measures");
extras = document.querySelector("#extras");

tempo = 60;

let element;

for (i=0;i<4;i++) {
	element = document.createElement("button")
	element.innerHTML = i + 1;
	element.classList.add("note-box");
	measures.appendChild(element);
}

element = document.createElement("input")
extras.appendChild(element);

element = document.createElement("button")
element.innerHTML = "START";
extras.appendChild(element);

