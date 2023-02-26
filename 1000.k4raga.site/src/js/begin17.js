let btn = document.querySelector("#begin17 .button");

btn.addEventListener("click", () => {
	let A = Number(document.querySelector("#begin17 .A").value);
	let B = Number(document.querySelector("#begin17 .B").value);
	let C = Number(document.querySelector("#begin17 .C").value);

	let AC = Math.abs(A) + Math.abs(C)
	let BC = Math.abs(B) + Math.abs(C)
	let sum = AC + BC
	let answ = document.querySelector("#begin17 .answer");
	answ.textContent = "Расстояние AC - " + AC.toFixed(0) + " " + "Растояние BC - " + BC.toFixed(0) + "Их сумма - " + sum.toFixed(0);
});
