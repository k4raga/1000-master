let btn = document.querySelector("#begin27 .button");

//   Дано  число  A.  Вычислить  A8,  используя  вспомогательную  перемен-
// ную  и  три  операции  умножения.  Для  этого  последовательно  находить  A2,
// A4, A8. Вывести все найденные степени числа A

btn.addEventListener("click", () => {
	let A = Number(document.querySelector("#begin27 .A").value);

	let answ = document.querySelector("#begin27 .answer");

	let d = A * A;
	answ.textContent += "A2 " + d;
	d = d * d;
	answ.textContent += "A4 " + d;
	d = d * d;
	answ.textContent += "A8 " + d;
});
