let btn = document.querySelector("#begin31 .button");

btn.addEventListener("click", () => {
	let far = Number(document.querySelector("#begin31 .far").value);

	let answ = document.querySelector("#begin31 .answer");

	let grad = (far - 32)*5/9

	answ.textContent = "Градусы " + grad;
});
