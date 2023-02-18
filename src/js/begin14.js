let btn = document.querySelector("#begin14 .button");

btn.addEventListener("click", () => {
	let L = Number(document.querySelector("#begin14 .L").value);
	let R = L/(2*Math.PI)
	let S = Math.PI*Math.sqrt(R, 2)
	let answ = document.querySelector("#begin14 .answer");
	answ.textContent = "Радиус - " + R.toFixed(1) + " " + "Площадь - " + S.toFixed(1);
});
