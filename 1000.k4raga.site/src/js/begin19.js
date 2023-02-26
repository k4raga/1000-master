let btn = document.querySelector("#begin19 .button");

btn.addEventListener("click", () => {
	let x1 = Number(document.querySelector("#begin19 .x1").value);
	let y1 = Number(document.querySelector("#begin19 .y1").value);
	let x2 = Number(document.querySelector("#begin19 .x2").value);
	let y2 = Number(document.querySelector("#begin19 .y2").value);
	let answ = document.querySelector("#begin19 .answer");

	let lx = Math.abs(x1 - x2)
	let ly = Math.abs(y1 - y2);

	let S = lx*ly
	let P = 2*(lx+ly)

	answ.textContent = "Периметр: " + P +  " "+ "Площадь: " + S;

});
