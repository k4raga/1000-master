const case1 = (num) => {
	let day;
	switch (num) {
		case 1:
			day = " понедельник ";
			break;

		case 2:
			day = " вторник ";
			break;

		case 3:
			day = " среда ";
			break;

		case 4:
			day = " четверг ";
			break;

		case 5:
			day = " пятница ";
			break;

		case 6:
			day = " суббота ";
			break;

		case 7:
			day = " воскресенье ";
			break;

		default:
			day = " нет такого дня ";
	}
	return day;
};

const case2 = (num) => {
	let day;
	switch (num) {
		case 1:
			day = " плохо ";
			break;

		case 2:
			day = " неудовлетворительно ";
			break;

		case 3:
			day = " удовлетворительно ";
			break;

		case 4:
			day = " хорошо ";
			break;

		case 5:
			day = " отлично ";
			break;

		default:
			day = " нет такой оценки ";
	}
	return day;
};

const case3 = (num) => {
	let mounth;
	switch (num) {
		case 12:
		case 1:
		case 2:
			mounth = " Зима ";
			break;

		case 3:
		case 4:
		case 5:
			mounth = " Весна ";
			break;

		case 6:
		case 7:
		case 8:
			mounth = " Лето ";
			break;

		case 9:
		case 10:
		case 11:
			mounth = " Осень ";
			break;

		default:
			mounth = " нет такого месяца ";
	}
	return mounth;
};

const case4 = (num) => {
	let mounth;
	switch (num) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 9:
		case 12:
			mounth = " 31 день ";
			break;

		case 4:
		case 6:
		case 9:
		case 11:
			mounth = " 30 дней ";
			break;

		case 2:
			mounth = " 28 дней ";
			break;

		default:
			mounth = " нет такого месяца ";
	}
	return mounth;
};

const case5 = (num, A, B) => {
	let operation;
	switch (num) {
		case 1:
			operation = A + B;
			break;

		case 2:
			operation = A - B;
			break;

		case 3:
			operation = A * B;
			break;

		case 4:
			operation = A / B;
			break;

		default:
			operation = " нет такого знака ";
	}
	return operation;
};

const case6 = (segment, measurements) => {
	let metr;
	switch (measurements) {
		case 1: //дециметр
			metr = segment * 10 ** -1;
			break;

		case 2: //Километр
			metr = segment * 10 ** 3;
			break;

		case 3: //метр
			metr = segment;
			break;

		case 4: //милиметр
			metr = segment * 10 ** -3;
			break;

		case 5: //сантиметр
			metr = segment * 10 ** -2;
			break;

		default:
			metr = " нет такой единицы измерения ";
	}
	return metr;
};

const case7 = (segment, measurements) => {
	let kilo;
	switch (measurements) {
		case 1: //килограм
			kilo = segment;
			break;

		case 2: //милиграмм
			kilo = segment * 10 ** -6;
			break;

		case 3: //грамм
			kilo = segment * 10 ** -3;
			break;

		case 4: //тонна
			kilo = segment * 10 ** 3;
			break;

		case 5: //центнер
			kilo = segment * 10 ** 2;
			break;

		default:
			kilo = " нет такой единицы измерения ";
	}
	return kilo;
};

const case8 = (Day, Mounth) => {
	let DM = [];
	if (Day == 1) {
		switch (Mounth) {
			case 1:
				DM.push(12);
				DM.push(31);
				break;
			case 3:
			case 5:
			case 7:
			case 8:
			case 9:
			case 12:
				DM.push(Mounth - 1);
				DM.push(31);
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				DM.push(Mounth - 1);
				DM.push(30);
				break;

			case 2:
				DM.push(Mounth - 1);
				DM.push(28);
				break;
		}
		return DM;
	} else {
		DM.push(Mounth);
		DM.push(Day - 1);
		console.log(DM);
		return DM;
	}
};

const case9 = (Day, Mounth) => {
	let DM = [];
	if (Day == 31) {
		switch (Mounth) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 9:
				DM.push(Mounth + 1);
				DM.push(1);
				break;
			case 12:
				DM.push(1);
				DM.push(1);
				break;
			default:
				DM.push('Нет такого дня');
		}
	} else if (Day < 31) {
		DM.push(Mounth)
		DM.push(Day+1)
		} else {
			DM.push('нет такого дня')
			DM.push("нет такого дня");
		}

	if (Day == 30) {
		switch (Mounth) {
			case 4:
			case 6:
			case 9:
			case 11:
				DM.push(Mounth - 1);
				DM.push(1);
				break;
			default:
				"Нет такого дня";
		}
	} else if (Day < 30) {
		DM.push(Mounth);
		DM.push(Day + 1);
	} else {
		DM.push("нет такого дня");
		DM.push("нет такого дня");
	}
		if (Day == 28) {
			switch (Mounth) {
				case 2:
					DM.push(Mounth + 1);
					DM.push(1);
					break;
				default:
					"Нет такого дня";
			}
		} else if (Day < 28) {
			DM.push(Mounth);
			DM.push(Day + 1);
		} else {
			DM.push("нет такого дня");
			DM.push("нет такого дня");
		}

	return DM;
};

export { case1, case2, case3, case4, case5, case6, case7, case8, case9 };
