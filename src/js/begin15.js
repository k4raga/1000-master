let btn = document.querySelector("#begin15 .button");

btn.addEventListener("click", () => {
	let S = Number(document.querySelector("#begin15 .S").value);
	let D = Math.sqrt(4*S/Math.PI,2)
	let L = Math.PI*D
	let answ = document.querySelector("#begin15 .answer");
	answ.textContent = "Диаметр - " + D.toFixed(1) + " " + "Длинна окружности - " + L.toFixed(1);
});
