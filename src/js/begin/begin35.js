let btn = document.querySelector("#begin35 .button");

btn.addEventListener("click", () => {
	let U = Number(document.querySelector("#begin35 .U").value);
	let V = Number(document.querySelector("#begin35 .V").value);
	let T = Number(document.querySelector("#begin35 .T").value);
	let answ = document.querySelector("#begin35 .answer");

	if (V <= U) {
		answ.textContent = "Лодка плывет назад"
	}else {
		let S = (V - U)*T
		answ.textContent = "Путь который проделала лодка" + S
	}

});
