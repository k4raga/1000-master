let btn = document.querySelector("#begin30 .button");

btn.addEventListener("click", () => {
	let rad = Number(document.querySelector("#begin30 .rad").value);

	let answ = document.querySelector("#begin30 .answer");

	let grad = 180/Math.PI

	let radAnsw = grad*rad

	answ.textContent = "A " + radAnsw;
});
