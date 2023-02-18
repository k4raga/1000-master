let btn = document.querySelector("#begin2 .button");

btn.addEventListener("click", () => {
	let val = Number(document.querySelector("#begin2 .input").value);

	let res = val**2;
	let answ = document.querySelector("#begin2 .answer");
	answ.textContent = res;
});
