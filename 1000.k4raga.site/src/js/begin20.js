let btn = document.querySelector("#begin20 .button");

btn.addEventListener("click", () => {
	let x1 = Number(document.querySelector("#begin20 .x1").value);
	let y1 = Number(document.querySelector("#begin20 .y1").value);
	let x2 = Number(document.querySelector("#begin20 .x2").value);
	let y2 = Number(document.querySelector("#begin20 .y2").value);
	let answ = document.querySelector("#begin20 .answer");

	let distance = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1, 2), 2)

	answ.textContent = "Растояние: " + distance.toFixed(1);

});
