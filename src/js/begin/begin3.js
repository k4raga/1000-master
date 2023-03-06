let btn = document.querySelector("#begin3 .button");

btn.addEventListener("click", () => {
	let valA = Number(document.querySelector("#begin3 .input").value);
	let valB = Number(document.querySelector("#begin3 .input2").value);
	let S = valA * valB;
	let P = 2 * (valA + valB);
	let answ = document.querySelector("#begin3 .answer");
	answ.textContent = "Площадь: " + S + " " + "Периметр: " + P;
});
