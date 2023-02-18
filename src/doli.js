let btn = document.querySelector("#doli .button");

btn.addEventListener("click", () => {
	let full = Number(document.querySelector("#doli .inputa").value);
	let part = Number(document.querySelector("#doli .inputb").value);
	let osnovanie = Number(document.querySelector("#doli .inputc").value);
	let pr = (part / osnovanie) * full;

	let answ = document.querySelector("#doli .answer");
	answ.textContent = "Площадь" + " " + pr;
});

let btn2 = document.querySelector("#doli_fact .button");

btn2.addEventListener("click", () => {
	let full = Number(document.querySelector("#doli_fact .inputa").value);
	let part = Number(document.querySelector("#doli_fact .inputb").value);
	let scope = Number(document.querySelector("#doli_fact .inputc").value);
	let osn = Number(document.querySelector("#doli_fact .inputd").value);

	let pr = (part / full) * 100;
	let pr_uchas = pr / scope
	let na_osnovanie = (osn / 100) * pr_uchas;

	let answ = document.querySelector("#doli_fact .answer");
	answ.textContent =
		"Доля фактическая" +
		" " +
		pr.toFixed(2) +
		"%" +
		"Доли участников" +
		" " +
		pr_uchas.toFixed(2) +
		"%" +
		" " +
		na_osnovanie.toFixed(2) +
		"/" +
		osn.toFixed(2);
});
