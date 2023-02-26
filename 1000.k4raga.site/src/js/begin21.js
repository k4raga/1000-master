let btn = document.querySelector("#begin21 .button");

btn.addEventListener("click", () => {
	let x1 = Number(document.querySelector("#begin21 .x1").value);
	let y1 = Number(document.querySelector("#begin21 .y1").value);
	let x2 = Number(document.querySelector("#begin21 .x2").value);
	let y2 = Number(document.querySelector("#begin21 .y2").value);
	let x3 = Number(document.querySelector("#begin21 .x3").value);
	let y3 = Number(document.querySelector("#begin21 .y3").value);
	let answ = document.querySelector("#begin21 .answer");

	let distance12 = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1, 2), 2)
	let distance13 = Math.sqrt(Math.pow(x3 - x1,2) + Math.pow(y3 - y1, 2), 2)
	let distance23 = Math.sqrt(Math.pow(x3 - x2,2) + Math.pow(y3 - y2, 2), 2)

	let halfP = (distance12+distance13+distance23)/2;

	let S = Math.sqrt(halfP * (halfP - distance12)*(halfP-distance13)*(halfP-distance23))

	answ.textContent = "Площадь: " + S.toFixed(1);

});
