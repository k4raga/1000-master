let btn = document.querySelector("#begin37 .button");

btn.addEventListener("click", () => {
	let V1 = Number(document.querySelector("#begin37 .V1").value);
	let V2 = Number(document.querySelector("#begin37 .V2").value);
	let S = Number(document.querySelector("#begin37 .S").value);
	let T = Number(document.querySelector("#begin37 .T").value);
	let answ = document.querySelector("#begin37 .answer");

	let VSUM = V1 + V2
	let S2 = [];
	for (let i = 0; i <= T; i++) {
		let SSUM = VSUM * i
		if (SSUM > S) {
			answ.textContent = "Автомобили втсретились через " + i
			break
		} else {
			S2.unshift(S - SSUM)
		}

	}
	answ.textContent += "Расстояние между авто " + S2[0]
});