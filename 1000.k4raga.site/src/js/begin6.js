let btn = document.querySelector("#begin6 .button");

btn.addEventListener("click", () => {
	let vala = Number(document.querySelector("#begin6 .inputa").value);

    let valb = Number(document.querySelector("#begin6 .inputb").value);
    let valc = Number(document.querySelector("#begin6 .inputc").value);
	let S = 2*(vala*valb+valb*valc+vala*valc);
	let answ = document.querySelector("#begin6 .answer");
	answ.textContent = "Площадь: " + S;
});
