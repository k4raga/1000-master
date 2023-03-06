let btn = document.querySelector("#begin5 .button");

btn.addEventListener("click", () => {
	let val = Number(document.querySelector("#begin5 .input").value);
	let V = Math.pow(val, 3);
	let S = Math.pow(val, 2)*6;
	let answ = document.querySelector("#begin5 .answer");
	answ.textContent = 'Объем: ' + V + 'Площадь: ' + S;
});
