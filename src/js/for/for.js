import { Task, pastInput, pastCard, title } from "./forConstructor.js";
import {
	for1,
	for2,
	for3,
	for4,
	for5,
	for6,
	for7,
	for8,
	for9,
	for10,
	for11,
	for12,
	for13,
	for14,
	for15,
	for16,
	for17,
	for18,
	for19,
	for20,
	for21,
	for22,
	for23,
	for24,
	for25,
	for26,
} from "./forFun.js";
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

{
	const task = new Task({
		num: "14",
		descriptions: `
Дано целое число N (> 0). Найти квадрат данного числа, используя для его вычисления следующую формулу:
N2 = 1 + 3 + 5 + . . . + (2·N − 1).
После добавления к сумме каждого слагаемого выводить текущее значение суммы (в результате будут выведены квадраты всех целых чисел от 1 до N).
`,
	});

	pastCard(task);
	pastInput(task, "N", "N");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += for14(N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "15",
		descriptions: `

Дано вещественное число A и целое число N (> 0). Найти A в степени N:
AN = A·A· . . . ·A
(числа A перемножаются N раз).
`,
	});

	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		const A = Number(task.ID().querySelector(".A").value);
		task.answer().innerHTML += for15(A, N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "16",
		descriptions: `
Дано вещественное число A и целое число N (> 0). Используя один цикл, вывести все целые степени числа A от 1 до N.
`,
	});

	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		const A = Number(task.ID().querySelector(".A").value);
		task.answer().innerHTML += for16(A, N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "17",
		descriptions: `

Дано вещественное число A и целое число N (> 0). Используя один цикл, найти сумму
1 + A + A2 + A3 + . . . + AN .

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		const A = Number(task.ID().querySelector(".A").value);
		task.answer().innerHTML += for17(A, N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "18",
		descriptions: `

Дано вещественное число A и целое число N (> 0). Используя один цикл, найти значение выражения
1 − A + A2 − A3 + . . . + (−1)N ·AN .
Условный оператор не использовать.

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		const A = Number(task.ID().querySelector(".A").value);
		task.answer().innerHTML += for18(A, N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "19",
		descriptions: `

Дано целое число N (> 0). Найти произведение
N! = 1·2·. . .·N (N–факториал).
Чтобы избежать целочисленного переполнения, вычислять это произведение с помощью вещественной переменной и вывести его как вещественное число.

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += for19(N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "20",
		descriptions: `

Дано целое число N (> 0). Используя один цикл, найти сумму
1! + 2! + 3! + . . . + N!
(выражение N! — N–факториал — обозначает произведение всех целых чисел от 1 до N: N! = 1·2·. . .·N). Чтобы избежать целочисленного переполнения, проводить вычисления с помощью вещественных переменных и вывести результат как вещественное число.
`,
	});

	pastCard(task);
	pastInput(task, "N", "N");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += for20(N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "21",
		descriptions: `

Дано целое число N (> 0). Используя один цикл, найти сумму
1 + 1/(1!) + 1/(2!) + 1/(3!) + . . . + 1/(N!)
(выражение N! — N–факториал — обозначает произведение всех целых чисел от 1 до N: N! = 1·2·. . .·N). Полученное число является приближенным значением константы e = exp(1).

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += for21(N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "22",
		descriptions: `


Дано вещественное число X и целое число N (> 0). Найти значение выражения
1 + X + X 2/(2!) + . . . + X N /(N!)
(N! = 1·2·. . .·N). Полученное число является приближенным значением функции exp в точке X.

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "X", "X");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		const X = Number(task.ID().querySelector(".X").value);
		task.answer().innerHTML += for22(X, N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "23",
		descriptions: `


Дано вещественное число X и целое число N (> 0). Найти значение выражения
X − X 3/(3!) + X 5/(5!) − . . . + (−1)N ·X 2·N +1/((2·N+1)!)
(N! = 1·2·. . .·N). Полученное число является приближенным значением функции sin в точке X.


`,
	});

	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "X", "X");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		const X = Number(task.ID().querySelector(".X").value);
		task.answer().innerHTML += for23(X, N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "24",
		descriptions: `



Дано вещественное число X и целое число N (> 0). Найти значение выражения
1 − X 2/(2!) + X 4/(4!) − . . . + (−1)N ·X 2·N /((2·N)!)
(N! = 1·2·. . .·N). Полученное число является приближенным значением функции cos в точке X.


`,
	});

	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "X", "X");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		const X = Number(task.ID().querySelector(".X").value);
		task.answer().innerHTML += for24(X, N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "25",
		descriptions: `


Дано вещественное число X (|X | < 1) и целое число N (> 0). Найти значение выражения
X − X 2/2 + X 3/3 − . . . + (−1)N −1·X N /N.
Полученное число является приближенным значением функции ln в точке 1 + X.

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "X", "X");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		const X = Number(task.ID().querySelector(".X").value);
		task.answer().innerHTML += for25(X, N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "26",
		descriptions: `

Дано вещественное число X (|X | < 1) и целое число N (> 0). Найти значение выражения
X − X 3/3 + X 5/5 − . . . + (−1)N ·X 2·N +1/(2·N+1).
Полученное число является приближенным значением функции arctg в точке X.

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "X", "X");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		const X = Number(task.ID().querySelector(".X").value);
		task.answer().innerHTML += for26(X, N) + `<br>`;
	});
}
