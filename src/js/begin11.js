let btn = document.querySelector("#begin11 .button");

btn.addEventListener("click", () => {
	let vala = Number(document.querySelector("#begin11 .inputa").value);
	let valb = Number(document.querySelector("#begin11 .inputb").value);
	let sum = Math.abs(vala) + Math.abs(valb);
	let dif = Math.abs(vala) - Math.abs(valb);
	let chst = Math.abs(vala) / Math.abs(valb);
	let pr = Math.abs(vala) * Math.abs(valb);
	let answ = document.querySelector("#begin11 .answer");
	answ.textContent = "Сумма: " + sum +" "+ "Разность: " + dif + " "+"Частное: " + chst + " "+'Произведение: ' +" "+ pr;
});
