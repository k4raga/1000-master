let btn = document.querySelector("#begin26 .button");

btn.addEventListener("click", () => {
	let X = Number(document.querySelector("#begin26 .X").value);

	let answ = document.querySelector("#begin26 .answer");

	let y = 4*Math.pow((X-3), 6)-3 - 7*Math.pow((X-3), 3) + 2

	answ.textContent = "Ответ: " + y;
});
