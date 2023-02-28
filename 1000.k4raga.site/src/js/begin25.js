let btn = document.querySelector("#begin25 .button");

btn.addEventListener("click", () => {
	let X = Number(document.querySelector("#begin25 .X").value);

	let answ = document.querySelector("#begin25 .answer");

	let f = 3*Math.pow(X, 6) - 6*Math.pow(X, 2) -7

	answ.textContent = "Ответ: " + f;
});
