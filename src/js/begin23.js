let btn = document.querySelector("#begin23 .button");

btn.addEventListener("click", () => {
	let A = Number(document.querySelector("#begin23 .A").value);
	let B = Number(document.querySelector("#begin23 .B").value);
	let C = Number(document.querySelector("#begin23 .С").value);

	let answ = document.querySelector("#begin23 .answer");

	let D = A
	let F = C

	A = B
	C = D
	B = F


	answ.textContent = "A: " + A + " " + "B: " + B + " " + "C: " + C;

});
