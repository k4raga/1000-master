let btn = document.querySelector("#begin39 .button");

btn.addEventListener("click", () => {
	let B = Number(document.querySelector("#begin39 .B").value);
	let A = Number(document.querySelector("#begin39 .A").value);
	let C = Number(document.querySelector("#begin39 .A").value);
	let answ = document.querySelector("#begin39 .answer");


	if (A == 0) {
		answ.textContent += "A равен нулю "
	} else {
		let D = Math.pow(B, 2) - 4 * A * C
		if (D < 0) {
			answ.textContent += "Дискриминант отрицателен"
		} else {
			let XPositive = (-B + Math.sqrt(D, 2)) / (2 * A)
			let XNegative = (-B + Math.sqrt(D, 2)) / (2 * A)
			answ.textContent += "X1 " + XPositive + " X2 " + XNegative + " Дискриминант " + D
		}
	}

});