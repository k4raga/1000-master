let btn = document.querySelector("#begin32 .button");

btn.addEventListener("click", () => {
	let grad = Number(document.querySelector("#begin32 .grad").value);

	let answ = document.querySelector("#begin32 .answer");


	let far = grad/5*9 + 32

	answ.textContent = "Фаренгейт " + far;
});
