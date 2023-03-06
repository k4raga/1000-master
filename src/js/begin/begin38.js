let btn = document.querySelector("#begin38 .button");

btn.addEventListener("click", () => {
	let B = Number(document.querySelector("#begin38 .B").value);
	let A = Number(document.querySelector("#begin38 .A").value);
	let answ = document.querySelector("#begin38 .answer");
	if (A == 0) {
		answ.textContent += "A равен нулю "
	} else {
		let x = -B / A
		answ.textContent += "Расстояние между авто " + x
	}

});