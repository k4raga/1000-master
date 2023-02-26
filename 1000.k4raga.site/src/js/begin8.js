let btn = document.querySelector("#begin8 .button");
// Найти длину окружности L и площадь круга S заданного радиуса R:
// L = 2·π·R,
// S = π·R2
btn.addEventListener("click", () => {
	let vala = Number(document.querySelector("#begin8 .inputa").value);
	let valb = Number(document.querySelector("#begin8 .inputb").value);
	let middle = (vala+valb)/2;
	let answ = document.querySelector("#begin8 .answer");
	answ.textContent = "Среднее арифметическое: " + middle;
});
