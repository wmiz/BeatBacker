// Populate measure boxes
measures = document.querySelector("#measures");

for (i=0;i<4;i++) {
	let element = document.createElement("button")
	element.innerHTML = i;
	element.classList.add("note-box");
	measures.appendChild(element);
}
