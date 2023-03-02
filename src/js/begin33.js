let btn = document.querySelector("#begin33 .button");

btn.addEventListener("click", () => {
	let X = Number(document.querySelector("#begin33 .X").value);
	let A = Number(document.querySelector("#begin33 .A").value);
	let Y = Number(document.querySelector("#begin33 .Y").value);
	let answ = document.querySelector("#begin33 .answer");

	let KG = A / X
	let nn = KG*Y

		answ.textContent = "Киллограм " + KG + "Y стоит " + nn;
});
