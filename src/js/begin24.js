let btn = document.querySelector("#begin24 .button");

btn.addEventListener("click", () => {
	let A = Number(document.querySelector("#begin24 .A").value);
	let B = Number(document.querySelector("#begin24 .B").value);
	let C = Number(document.querySelector("#begin24 .С").value);

	let answ = document.querySelector("#begin24 .answer");

	let D = A;
	let F = C;
	let E = B;

	A = F;
	C = E;
	B = D;

	answ.textContent = "A: " + A + " " + "B: " + B + " " + "C: " + C;
});
