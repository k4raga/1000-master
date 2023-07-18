import { Task, pastInput, pastCard, title } from "./forConstructor.js";
import { for1 } from "./forFun.js";
console.log(title);
{
	const task = new Task({
		num: "1",
		descriptions: `Даны целые числа K и N (N > 0). Вывести N раз число K.`,
	});

	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "K", "K");

	task.btn().addEventListener("click", (evt) => {
		const K = Number(task.ID().querySelector(".K").value);
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += `</br>` + for1(K, N);
	});
}
