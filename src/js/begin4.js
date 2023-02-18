let btn = document.querySelector("#begin4 .button");

btn.addEventListener("click", () => {
	let val = Number(document.querySelector("#begin4 .input").value);
	let L = Math.PI * val;
	let answ = document.querySelector("#begin4 .answer");
	answ.textContent = L;
});
