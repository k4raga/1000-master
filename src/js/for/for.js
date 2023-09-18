import { Task, pastInput, pastCard, title } from "./forConstructor.js";
import * as f from "./forFun.js";
{
	const task = new Task({ num: "1", descriptions: `Даны целые числа K и N (N > 0). Вывести N раз число K.` });
	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "K", "K");
	task.btn().addEventListener("click", (evt) => {
		const K = Number(task.ID().querySelector(".K").value);
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += `</br>` + f.for1(K, N);
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
		task.answer().innerHTML += `</br>` + f.for2(A, B);
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
		task.answer().innerHTML += `</br>` + f.for3(A, B);
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
		task.answer().innerHTML += `</br>` + f.for4(price);
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
		task.answer().innerHTML += f.for5(price) + `<br>`;
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
		task.answer().innerHTML += f.for6(price) + `<br>`;
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
		task.answer().innerHTML += f.for7(A, B) + `<br>`;
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
		task.answer().innerHTML += f.for8(A, B) + `<br>`;
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
		task.answer().innerHTML += f.for9(A, B) + `<br>`;
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
		task.answer().innerHTML += f.for10(N) + `<br>`;
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
		task.answer().innerHTML += f.for11(N) + `<br>`;
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
		task.answer().innerHTML += f.for12(N) + `<br>`;
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
		task.answer().innerHTML += f.for13(N) + `<br>`;
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
		task.answer().innerHTML += f.for14(N) + `<br>`;
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
		task.answer().innerHTML += f.for15(A, N) + `<br>`;
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
		task.answer().innerHTML += f.for16(A, N) + `<br>`;
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
		task.answer().innerHTML += f.for17(A, N) + `<br>`;
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
		task.answer().innerHTML += f.for18(A, N) + `<br>`;
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
		task.answer().innerHTML += f.for19(N) + `<br>`;
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
		task.answer().innerHTML += f.for20(N) + `<br>`;
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
		task.answer().innerHTML += f.for21(N) + `<br>`;
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
		task.answer().innerHTML += f.for22(X, N) + `<br>`;
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
		task.answer().innerHTML += f.for23(X, N) + `<br>`;
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
		task.answer().innerHTML += f.for24(X, N) + `<br>`;
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
		task.answer().innerHTML += f.for25(X, N) + `<br>`;
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
		task.answer().innerHTML += f.for26(X, N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "27",
		descriptions: `


Дано вещественное число X (|X | < 1) и целое число N (> 0). Найти значение выражения
X + 1·X 3/(2·3) + 1·3·X 5/(2·4·5) + . . . + 1·3·. . .·(2·N−1)·X 2·N +1/(2·4·. . .·(2·N)·(2·N+1)).
Полученное число является приближенным значением функции arcsin в точке X.


`,
	});

	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "X", "X");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		const X = Number(task.ID().querySelector(".X").value);
		task.answer().innerHTML += f.for27(X, N) + `<br>`;
	});
}

{
	const task = new Task({
		num: "28",
		descriptions: `

Дано вещественное число X (|X | < 1) и целое число N (> 0). Найти значение выражения
1 + X /2 − 1·X 2/(2·4) + 1·3·X 3/(2·4·6) − . . . + (−1)N −1·1·3·. . .·(2·N−3)·X N /(2·4·. . .·(2·N)).
Полученное число является приближенным значением функции √1+X .

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "X", "X");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		const X = Number(task.ID().querySelector(".X").value);
		task.answer().innerHTML += f.for28(X, N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "29",
		descriptions: `

Дано целое число N (> 1) и две вещественные точки на числовой оси:
A, B (A < B). Отрезок [A, B] разбит на N равных отрезков. Вывести H — длину каждого отрезка, а также набор точек
A, A + H, A + 2·H, A + 3·H, . . . , B, образующий разбиение отрезка [A, B].

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "B", "B");
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		const B = Number(task.ID().querySelector(".B").value);
		const A = Number(task.ID().querySelector(".A").value);
		task.answer().innerHTML += f.for29(N, B, A) + `<br>`;
	});
}
{
	const task = new Task({
		num: "30",
		descriptions: `
Дано целое число (N>14) и две вещественные точки на числовой оси: A и B, A < B, отрезок A, B разбит на N равных отрезков, вывести H - длинну каждого отрезка, а так же f(x) = 1 - sin(x) в точках разбивающих отрезок [a,b]:f(a), f(a+h), f(a+2h), ... f(b)

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "B", "B");
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		const B = Number(task.ID().querySelector(".B").value);
		const A = Number(task.ID().querySelector(".A").value);
		task.answer().innerHTML += f.for30(N, B, A) + `<br>`;
	});
}
{
	const task = new Task({
		num: "31",
		descriptions: `
Дано целое число N > 0, последовательность вещественных чисел A_K определяется следующим образом А0 = 2, Ak = 2+(1/Ak-1), k, 1,2,

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += f.for31(N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "32",
		descriptions: `
Дано целое число N > 0, последовательность вещественных чисел A_K определяется следующим образом А0 = 1, Ak = ((Ak-1)+1)/k, k, 1,2,

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += f.for32(N) + `<br>`;
	});
}

{
	const task = new Task({
		num: "33",
		descriptions: `

Дано целое число N (> 1). Последовательность чисел Фибоначчи FK (целого типа) определяется следующим образом:
F1 = 1, F2 = 1, FK = FK−2 + FK−1, K = 3, 4, . . . .
Вывести элементы F1, F2, ..., FN.


`,
	});

	pastCard(task);
	pastInput(task, "N", "N");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += f.for33(N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "34",
		descriptions: `

Дано целое число N (> 1). Последовательность вещественных чисел AK определяется следующим образом:
A1 = 1, A2 = 2, AK = (AK−2 + 2·AK−1)/3, K = 3, 4, . . . .
Вывести элементы A1, A2, . . . , AN .

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += f.for34(N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "35",
		descriptions: `

Дано целое число N (> 2). Последовательность целых чисел AK определяется следующим образом:
A1 = 1, A2 = 2, A3 = 3,
AK = AK−1 + AK−2 − 2·AK−3, K = 4, 5, . . . .
Вывести элементы A1, A2, . . . , AN .

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += f.for35(N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "36",
		descriptions: `

Даны целые положительные числа N и K. Найти сумму
1K + 2K + . . . + NK .
Чтобы избежать целочисленного переполнения, вычислять слагаемые этой суммы с помощью вещественной переменной и выводить результат как вещественное число.

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");
	pastInput(task, "K", "K");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		const K = Number(task.ID().querySelector(".K").value);
		task.answer().innerHTML += f.for36(N, K) + `<br>`;
	});
}
{
	const task = new Task({
		num: "37",
		descriptions: `

Дано целое число N (> 0). Найти сумму
11 + 22 + . . . + NN .
Чтобы избежать целочисленного переполнения, вычислять слагаемые этой суммы с помощью вещественной переменной и выводить результат как вещественное число.

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);

		task.answer().innerHTML += f.for37(N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "38",
		descriptions: `

Дано целое число N (> 0). Найти сумму
1N + 2N −1 + . . . + N1.
Чтобы избежать целочисленного переполнения, вычислять слагаемые этой суммы с помощью вещественной переменной и выводить результат как вещественное число.

`,
	});

	pastCard(task);
	pastInput(task, "N", "N");

	task.btn().addEventListener("click", (evt) => {
		const N = Number(task.ID().querySelector(".N").value);
		task.answer().innerHTML += f.for38(N) + `<br>`;
	});
}
{
	const task = new Task({
		num: "39",
		descriptions: `
Даны целые положительные числа A и B (A < B). Вывести все целые числа от A до B включительно; при этом каждое число должно выводиться столько раз, каково его значение (например, число 3 выводится 3 раза).
`,
	});

	pastCard(task);
	pastInput(task, "B", "B");
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const A = Number(task.ID().querySelector(".A").value);
		const B = Number(task.ID().querySelector(".B").value);
		task.answer().innerHTML += f.for39(A, B) + `<br>`;
	});
}
{
	const task = new Task({
		num: "40",
		descriptions: `
Даны целые числа A и B (A < B). Вывести все целые числа от A до B включительно; при этом число A должно выводиться 1 раз, число A + 1 должно выводиться 2 раза и т. д.
`,
	});

	pastCard(task);
	pastInput(task, "B", "B");
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const A = Number(task.ID().querySelector(".A").value);
		const B = Number(task.ID().querySelector(".B").value);
		task.answer().innerHTML += f.for40(A, B) + `<br>`;
	});
}
