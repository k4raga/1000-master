let btn = document.querySelector("#begin9 .button");
// Найти длину окружности L и площадь круга S заданного радиуса R:
// L = 2·π·R,
// S = π·R2
btn.addEventListener("click", () => {
	let vala = Number(document.querySelector("#begin9 .inputa").value);
	let valb = Number(document.querySelector("#begin9 .inputb").value);
	let middle = Math.sqrt(vala*valb)
	let answ = document.querySelector("#begin9 .answer");
	answ.textContent = "Среднее геометрическое: " + middle;
});
