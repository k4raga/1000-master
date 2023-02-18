let btn = document.querySelector("#begin12 .button");

btn.addEventListener("click", () => {
	let vala = Number(document.querySelector("#begin12 .inputa").value);
	let valb = Number(document.querySelector("#begin12 .inputb").value);
	let gip = Math.sqrt(Math.pow(vala, 2) + Math.pow(valb, 2));
	let per = vala + valb + gip;

	let answ = document.querySelector("#begin12 .answer");
	answ.textContent = "Гиппотенуза: " + gip.toFixed(1) + " " + "Периметр: " + per.toFixed(1);
});
