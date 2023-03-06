let btn = document.querySelector("#begin16 .button");

btn.addEventListener("click", () => {
	let x1 = Number(document.querySelector("#begin16 .x1").value);
	let x2 = Number(document.querySelector("#begin16 .x2").value);
	let way = Math.abs(x2 - x1)
	let answ = document.querySelector("#begin16 .answer");
	answ.textContent = "Расстояние - " + way.toFixed(0);
});
