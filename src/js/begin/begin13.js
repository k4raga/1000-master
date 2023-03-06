let btn = document.querySelector("#begin13 .button");

btn.addEventListener("click", () => {
	let R1 = Number(document.querySelector("#begin13 .R1").value);
	let R2 = Number(document.querySelector("#begin13 .R2").value);
	let S1 = Math.PI * Math.pow(R1, 2);
	let S2 = Math.PI * Math.pow(R2, 2);
	let S3 = S1 - S2;
	let answ = document.querySelector("#begin13 .answer");
	answ.textContent = "Площадь S1 " + S1.toFixed(1) + " " + "Площадь S2 " + S2.toFixed(1) + "" + "Площадь кольца S3 " + S3.toFixed(1);
});
