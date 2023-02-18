let btn = document.querySelector("#begin10 .button");

btn.addEventListener("click", () => {
	let vala = Number(document.querySelector("#begin10 .inputa").value);
	let valb = Number(document.querySelector("#begin10 .inputb").value);
	let sum = Math.pow(vala, 2) + Math.pow(valb, 2);
	let dif = Math.pow(vala, 2) - Math.pow(valb, 2);
	let chst = Math.pow(vala, 2) / Math.pow(valb, 2);
	let pr = Math.pow(vala, 2) * Math.pow(valb, 2);
	let answ = document.querySelector("#begin10 .answer");
	answ.textContent = "Суумма: " + sum +" "+ "Разность: " + dif + " "+"Частное: " + chst + " "+'Произведение: ' +" "+ pr;
});
