import { Task, pastInput, pastCard } from "./caseConstr.js";
import { case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, case11, case12 } from "../../tests/case/case.js";

{
	const task = new Task({
		num: "1",
		descriptions: `Дано целое число в диапазоне 1–7. Вывести строку — название дня не-
                    дели,  соответствующее  данному  числу  (1  —  «понедельник»,  2  —  «втор-
                    ник» и т. д.). `,
	});

	pastCard(task);
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const A = Number(task.ID().querySelector(".A").value);

		task.answer().innerHTML += `</br>` + case1(A);
	});
}

{
	const task = new Task({
		num: "2",
		descriptions: `Дано  целое  число  K.  Вывести  строку-описание  оценки,  соответствую-
                        щей числу K (1 — «плохо», 2 — «неудовлетворительно», 3 — «удовлетво-
                        рительно»,  4  —  «хорошо»,  5  —  «отлично»).  Если  K  не  лежит  в  диапазоне
                        1–5, то вывести строку «ошибка».  `,
	});

	pastCard(task);
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const A = Number(task.ID().querySelector(".A").value);

		task.answer().innerHTML += `</br>` + case2(A);
	});
}

{
	const task = new Task({
		num: "3",
		descriptions: `Дан  номер  месяца  —  целое  число  в  диапазоне  1–12  (1  —  январь,  2  —
                        февраль  и  т.  д.).  Вывести  название  соответствующего  времени  года  («зи-
                        ма», «весна», «лето», «осень»)  `,
	});

	pastCard(task);
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const A = Number(task.ID().querySelector(".A").value);

		task.answer().innerHTML += `</br>` + case3(A);
	});
}

{
	const task = new Task({
		num: "4",
		descriptions: `Дан  номер  месяца — целое число в диапазоне 1–12 (1 — январь, 2 —
                        февраль  и  т.  д.).  Определить  количество  дней  в  этом  месяце  для  невисо-
                        косного года.   `,
	});

	pastCard(task);
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const A = Number(task.ID().querySelector(".A").value);

		task.answer().innerHTML += `</br>` + case4(A);
	});
}

{
	const task = new Task({
		num: "5",
		descriptions: `Арифметические  действия  над  числами  пронумерованы  следующим
                        образом:  1  —  сложение,  2  —  вычитание,  3  —  умножение,  4  —  деление.
                        Дан номер действия N (целое число в диапазоне 1–4) и вещественные числа A и B (В не равно 0). Выполнить над числами указанное действие и вывести результат   `,
	});

	pastCard(task);
	pastInput(task, "operation", "operation");
	pastInput(task, "B", "B");
	pastInput(task, "A", "A");

	task.btn().addEventListener("click", (evt) => {
		const A = Number(task.ID().querySelector(".A").value);
		const B = Number(task.ID().querySelector(".B").value);
		const operation = Number(task.ID().querySelector(".operation").value);

		task.answer().innerHTML += `</br>` + case5(operation, A, B);
	});
}

{
	const task = new Task({
		num: "6",
		descriptions: `Единицы  длины  пронумерованы  следующим  образом:  1  —  дециметр,
2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр. Дан номер единицы  длины  ( целое  число  в диапазоне  1–5)  и  длина  отрезка  в  этих  единицах (вещественное число). Найти длину отрезка в метрах.  `,
	});

	pastCard(task);
	pastInput(task, "segment", "segment");
	pastInput(task, "measurements", "measurements");

	task.btn().addEventListener("click", (evt) => {
		const measurements = Number(task.ID().querySelector(".measurements").value);
		const segment = Number(task.ID().querySelector(".segment").value);

		task.answer().innerHTML += `</br>` + case6(segment, measurements) + "метров";
	});
}

{
	const task = new Task({
		num: "7",
		descriptions: `Единицы  массы  пронумерованы  следующим  образом:  1  —  килограмм,
2 — миллиграмм, 3 — грамм, 4 — тонна, 5 — центнер. Дан номер единицы
массы  ( целое  число  в  диапазоне  1–5)  и  масса  тела  в  этих  единицах  ( веще-
ственное число). Найти массу тела в килограммах.  `,
	});

	pastCard(task);
	pastInput(task, "segment", "segment");
	pastInput(task, "measurements", "measurements");

	task.btn().addEventListener("click", (evt) => {
		const measurements = Number(task.ID().querySelector(".measurements").value);
		const segment = Number(task.ID().querySelector(".segment").value);

		task.answer().innerHTML += `</br>` + case7(segment, measurements);
	});
}

{
	const task = new Task({
		num: "8",
		descriptions: `Даны  два  целых  числа:  D  ( день)  и  M  ( месяц),  определяющие  правиль-
ную дату невисокосного года. Вывести значения D и M для даты, предше-
ствующей указанной.  `,
	});

	pastCard(task);
	pastInput(task, "Day", "Day");
	pastInput(task, "Mounth", "Mounth");

	task.btn().addEventListener("click", (evt) => {
		const Day = Number(task.ID().querySelector(".Day").value);
		const Mounth = Number(task.ID().querySelector(".Mounth").value);

		task.answer().innerHTML += `</br>` + "Месяц " + case8(Day, Mounth)[0] + " День " + case8(Day, Mounth)[1];
	});
}

{
	const task = new Task({
		num: "9",
		descriptions: `Даны два целых числа: D (день) и M (месяц), определяющие правильную дату невисокосного года. Вывести значения D и M для даты, следующей за указанной.   `,
	});

	pastCard(task);
	pastInput(task, "Day", "Day");
	pastInput(task, "Mounth", "Mounth");

	task.btn().addEventListener("click", (evt) => {
		const Day = Number(task.ID().querySelector(".Day").value);
		const Mounth = Number(task.ID().querySelector(".Mounth").value);

		task.answer().innerHTML += `</br>` + "Месяц " + case9(Day, Mounth)[0] + " День " + case9(Day, Mounth)[1];
	});
}

{
	const task = new Task({
		num: "10",
		descriptions: `Робот  может  перемещаться  в  четырех  направлениях  («С»  —  север,
«З»  —  запад,  «Ю»  —  юг,  «В»  —  восток)  и  принимать  три  цифровые  ко-
манды: 0 — продолжать движение, 1 — поворот налево, –1 — поворот на-
право.  Дан  символ  C  —  исходное  направление  робота  и  целое  число  N  —
посланная  ему  команда.  Вывести  направление  робота  после  выполнения
полученной команды.   `,
	});

	pastCard(task);
	pastInput(task, "direction", "direction");
	pastInput(task, "comand", "comand");

	task.btn().addEventListener("click", (evt) => {
		const direction = task.ID().querySelector(".direction").value;
		const comand = Number(task.ID().querySelector(".comand").value);

		task.answer().innerHTML += `</br>` + "Направление робота " + case10(direction, comand);
	});
}

{
	const task = new Task({
		num: "11",
		descriptions: `Локатор  ориентирован  на  одну  из  сторон  света  («С»  —  север,  «З»  —запад,  «Ю»  —  юг,  «В»  —  восток)  и  может  принимать  три  цифровые  ко-
манды поворота: 1 — поворот налево, –1 — поворот направо, 2 — поворот
на 180°. Дан символ C — исходная ориентация локатора и целые числа N1
и  N2  —  две  посланные  команды.  Вывести  ориентацию  локатора  после
выполнения этих команд.    `,
	});

	pastCard(task);
	pastInput(task, "direction", "direction");
	pastInput(task, "comand", "comand");
	pastInput(task, "comand2", "comand2");

	task.btn().addEventListener("click", (evt) => {
		const direction = task.ID().querySelector(".direction").value;
		const comand = Number(task.ID().querySelector(".comand").value);
		const comand2 = Number(task.ID().querySelector(".comand2").value);

		task.answer().innerHTML += `</br>` + "Направление робота " + case11(case11(direction, comand), comand2);
	});
}

{
	const task = new Task({
		num: "12",
		descriptions: `Элементы равностороннего треугольника пронумерованы следующим
образом:  1  —  сторона  a,  2  —  радиус  R1  вписанной  окружности  ( R1 =
= 3 / 6 a ), 3 — радиус R2 описанной окружности (R2 = 2·R1), 4 — площадь
S = 2 3 / a 4 . Дан номер одного из этих элементов и его значение. Вывести
значения остальных элементов данного треугольника (в том же порядке).     `,
	});

	pastCard(task);
	pastInput(task, "a", "a");
	pastInput(task, "comand", "comand");

	task.btn().addEventListener("click", (evt) => {
		const comand = Number(task.ID().querySelector(".comand").value);
		const a = Number(task.ID().querySelector(".a").value);

		Object.entries(case12(comand, a)).forEach(([key, values]) => (task.answer().innerHTML += `</br>` + key + ' - ' + values));

	});
}
