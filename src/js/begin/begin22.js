let btn = document.querySelector("#begin22 .button");

btn.addEventListener("click", () => {
	let A = Number(document.querySelector("#begin22 .A").value);
	let B = Number(document.querySelector("#begin22 .B").value);
	let answ = document.querySelector("#begin22 .answer");
	let C = A
	A = B
	B = C
	answ.textContent = "A: " + A +" "+ "B: " + B;

});

