let btn = document.querySelector("#begin29 .button");

btn.addEventListener("click", () => {
	let A = Number(document.querySelector("#begin29 .A").value);

	let answ = document.querySelector("#begin29 .answer");

	let rad = Math.PI/180

	let radAnsw = A*rad

	answ.textContent = "A " + radAnsw;
});
