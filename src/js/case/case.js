import { Task, pastInput, pastCard } from "./caseConstr.js";
import { case1, case2, case3, case4, case5 } from "../../tests/case/case.js";

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