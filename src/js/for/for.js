import { Task, pastInput, pastCard, title } from "./forConstructor.js";
import { for1, for2, for3, for4, for5, for6, for7, for8, for9, for10, for11, for12, for13 } from "./forFun.js";
{
	const task = new Task({ num: "1", descriptions: `Даны целые числа K и N (N > 0). Вывести N раз число K.` });
	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "K", "K");
	task.btn().addEventListener("click", (evt) => {
		const K = Number(task.ID().querySelector(".K").value);
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += `</br>` + for1(K, N);
	});
}
{
	const task = new Task({
		num: "2",
		descriptions: `Даны два целых числа A и B (A < B). Вывести в порядке возрастания все целые числа, расположенные между A и B(включая сами числа A и B), а так же количество N этих чисел`,
	});

	pastCard(task);
	pastInput(task, "B", "B");
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const A = Number(task.ID().querySelector(".A").value);
		const B = Number(task.ID().querySelector(".B").value);
		task.answer().innerHTML += `</br>` + for2(A, B);
	});
}
{
	const task = new Task({
		num: "3",
		descriptions: `Даны два целых числа A и B (A < B). Вывести в порядке убывания все целые числа, расположенные между A и B (не включая числа A и B), а также количество N этих чисел.`,
	});

	pastCard(task);
	pastInput(task, "B", "B");
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const A = Number(task.ID().querySelector(".A").value);
		const B = Number(task.ID().querySelector(".B").value);
		task.answer().innerHTML += `</br>` + for3(A, B);
	});
}
{
	const task = new Task({
		num: "4",
		descriptions: `Дано вещественное число — цена 1 кг конфет. Вывести стоимость 1, 2, . . . , 10 кг конфет.`,
	});

	pastCard(task);
	pastInput(task, "price", "price");

	task.btn().addEventListener("click", (evt) => {
		const price = Number(task.ID().querySelector(".price").value);
		task.answer().innerHTML += `</br>` + for4(price);
	});
}
{
	const task = new Task({
		num: "5",
		descriptions: `Дано вещественное число — цена 1 кг конфет. Вывести стоимость 0.1, 0.2, . . . , 1 кг конфет.`,
	});

	pastCard(task);
	pastInput(task, "price", "price");

	task.btn().addEventListener("click", (evt) => {
		const price = Number(task.ID().querySelector(".price").value);
		task.answer().innerHTML += for5(price) + `<br>`;
	});
}
{
	const task = new Task({
		num: "6",
		descriptions: `Дано вещественное число — цена 1 кг конфет. Вывести стоимость 1.2, 1.4, . . . , 2 кг конфет.`,
	});
	pastCard(task);
	pastInput(task, "price", "price");

	task.btn().addEventListener("click", (evt) => {
		const price = Number(task.ID().querySelector(".price").value);
		task.answer().innerHTML += for6(price) + `<br>`;
	});
}
{
	const task = new Task({
		num: "7",
		descriptions: `Даны два целых числа A и B (A < B). Найти сумму всех целых чисел от A до B включительно.`,
	});

	pastCard(task);
	pastInput(task, "B", "B");
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const A = Number(task.ID().querySelector(".A").value);
		const B = Number(task.ID().querySelector(".B").value);
		task.answer().innerHTML += for7(A, B) + `<br>`;
	});
}
{
	const task = new Task({
		num: "8",
		descriptions: `Даны два целых числа A и B (A < B). Найти проиведение всех целых чисел от A до B включительно.`,
	});

	pastCard(task);
	pastInput(task, "B", "B");
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const A = Number(task.ID().querySelector(".A").value);
		const B = Number(task.ID().querySelector(".B").value);
		task.answer().innerHTML += for8(A, B) + `<br>`;
	});
}
{
	const task = new Task({
		num: "9",
		descriptions: `Даны два целых числа A и B (A < B). Найти сумму квадратов всех целых чисел от A до B включительно.`,
	});

	pastCard(task);
	pastInput(task, "B", "B");
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const A = Number(task.ID().querySelector(".A").value);
		const B = Number(task.ID().querySelector(".B").value);
		task.answer().innerHTML += for9(A, B) + `<br>`;
	});
}
{
	const task = new Task({
		num: "10",
		descriptions: `
Дано целое число N (> 0). Найти сумму 1 + 1/2 + 1/3 + . . . + 1/N
(вещественное число).
`,
	});

	pastCard(task);
	pastInput(task, "N", "N");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += for10(N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "11",
		descriptions: `

Дано целое число N (> 0). Найти сумму
N2 + (N + 1)2 + (N + 2)2 + . . . + (2·N)2
(целое число).

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += for11(N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "12",
		descriptions: `

Дано целое число N (> 0). Найти произведение
1.1 · 1.2 · 1.3 · . . .
(N сомножителей).


`,
	});

	pastCard(task);
	pastInput(task, "N", "N");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += for12(N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "13",
		descriptions: `
Дано целое число N (> 0). Найти значение выражения 1.1 − 1.2 + 1.3 − . . .
(N слагаемых, знаки чередуются). Условный оператор не использовать.

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += for13(N) + `<br>`;
	});
}
