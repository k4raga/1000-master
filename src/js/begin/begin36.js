let btn = document.querySelector("#begin36 .button");

btn.addEventListener("click", () => {
	let V1 = Number(document.querySelector("#begin36 .V1").value);
	let V2 = Number(document.querySelector("#begin36 .V2").value);
	let S = Number(document.querySelector("#begin36 .S").value);
	let T = Number(document.querySelector("#begin36 .T").value);
	let answ = document.querySelector("#begin36 .answer");

	let VSUM = V1 + V2

	let S2 = S + VSUM*T

	answ.textContent = "Расстояние между ними " + S2
});