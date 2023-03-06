let btn = document.querySelector("#begin34 .button");

btn.addEventListener("click", () => {
	let X = Number(document.querySelector("#begin34 .X").value);
	let A = Number(document.querySelector("#begin34 .A").value);
	let Y = Number(document.querySelector("#begin34 .Y").value);
	let B = Number(document.querySelector("#begin34 .B").value);
	let answ = document.querySelector("#begin34 .answer");

	let KGCandy = A / X
	let KGIris = B / Y
	let attitide = KGCandy/KGIris

		answ.textContent = "Киллограм конфет " + KGCandy + "Киллограм Ирисок " + KGIris + "Конфеты дороже Ирисок В " + attitide;
});
