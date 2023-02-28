let btn = document.querySelector("#begin28 .button");

btn.addEventListener("click", () => {
	let A = Number(document.querySelector("#begin28 .A").value);

	let answ = document.querySelector("#begin28 .answer");

	let f = A
	let d = A * A;
	answ.textContent += "A2 " + d;

	f = d * f;
	answ.textContent += "A3 " + f;

	f = d * f
	answ.textContent += "A5 " + f;

	d = f * f;
	answ.textContent += "A10 " + d;

	f = d * f;
	answ.textContent += "A15 " + d;
});
