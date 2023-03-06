let btn = document.querySelector("#begin18 .button");

btn.addEventListener("click", () => {
	let A = Number(document.querySelector("#begin18 .A").value);
	let B = Number(document.querySelector("#begin18 .B").value);
	let C = Number(document.querySelector("#begin18 .C").value);
	let answ = document.querySelector("#begin18 .answer");
	if (A < C && B > C ){
			let AC = Math.abs(A) + Math.abs(C);
			let BC = Math.abs(B) + Math.abs(C);
			let pr = AC * BC

			answ.textContent = "Произведение отрезков - " + pr
	} else {
		answ.textContent = "Точка не расположена внутри"
	}


});
