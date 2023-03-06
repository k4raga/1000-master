let btn = document.querySelector("#begin40 .button");

btn.addEventListener("click", () => {
	let A1 = Number(document.querySelector("#begin40 .A1").value);
	let A2 = Number(document.querySelector("#begin40 .A2").value);
	let B1 = Number(document.querySelector("#begin40 .B1").value);
	let B2 = Number(document.querySelector("#begin40 .B2").value);
	let C1 = Number(document.querySelector("#begin40 .C1").value);
	let C2 = Number(document.querySelector("#begin40 .C2").value);
	let answ = document.querySelector("#begin40 .answer");


	let D = A1 * B2 - A2 * B1
	answ.textContent += "Дискриминант равен " + D

	let x = (C1 * B2 - C2 * B2) / D
	let y = (A1 * C2 - A2 * C1) / D

	answ.textContent += " X равен " + x + " Y равен " + y
});