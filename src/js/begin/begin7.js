let btn = document.querySelector("#begin7 .button");
// Найти длину окружности L и площадь круга S заданного радиуса R:
// L = 2·π·R,
// S = π·R2
btn.addEventListener("click", () => {
	let val = Number(document.querySelector("#begin7 .input").value);
	let L = 2*Math.PI*val
	let S = Math.PI*Math.pow(val,2)
	let answ = document.querySelector("#begin7 .answer");
	answ.textContent = "Длинна окружности: "+ L.toFixed(1) + " " + "Площадь: " + S.toFixed(1);
});
