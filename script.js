//Code to create the boxes on an Etch a Sketch
const grid = document.querySelector('#gridContainer');
for (var i = 1; i < 400; i++){
	const box = document.createElement('div');
	box.classList.add('floating-box');
	grid.appendChild(box);
}