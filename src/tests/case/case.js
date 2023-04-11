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
				DM.push("Нет такого дня");
		}
	} else if (Day < 31) {
		DM.push(Mounth);
		DM.push(Day + 1);
	} else {
		DM.push("нет такого дня");
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

const case10 = (direction, comand) => {
	let res;
	let north = "Север";
	let south = "Юг";
	let west = "Запад";
	let east = "Восток";
	switch (direction) {
		case "С":
		case "C":
			switch (comand) {
				case 0:
					res = north;
					break;
				case 1:
					res = west;
					break;
				case -1:
					res = east;
					break;
			}
			break;
		case "З":
			switch (comand) {
				case 0:
					res = west;
					break;
				case 1:
					res = south;
					break;
				case -1:
					res = north;
					break;
			}
			break;
		case "Ю":
			switch (comand) {
				case 0:
					res = south;
					break;
				case 1:
					res = east;
					break;
				case -1:
					res = west;
					break;
			}
			break;
		case "З":
			switch (comand) {
				case 0:
					res = east;
					break;
				case 1:
					res = north;
					break;
				case -1:
					res = south;
					break;
			}
			break;
		default:
			res = " нет такого направления ";
	}
	return res;
};

const case11 = (direction, comand) => {
	let res;
	let north = "С";
	let south = "Ю";
	let west = "З";
	let east = "В";
	switch (direction) {
		case "С":
		case "C":
			switch (comand) {
				case 1:
					res = west;
					break;
				case -1:
					res = east;
					break;
				case 2:
					res = south;
					break;
			}
			break;
		case "З":
			switch (comand) {
				case 1:
					res = south;
					break;
				case -1:
					res = north;
					break;
				case 2:
					res = east;
					break;
			}
			break;
		case "Ю":
			switch (comand) {
				case 1:
					res = east;
					break;
				case -1:
					res = west;
					break;
				case 2:
					res = north;
					break;
			}
			break;
		case "З":
			switch (comand) {
				case 1:
					res = north;
					break;
				case -1:
					res = south;
					break;
				case 2:
					res = west;
					break;
			}
			break;
		default:
			res = " нет такого направления ";
	}
	return res;
};

const case12 = (comand, num) => {
	let a;
	let R1;
	let R2;
	let S;
	let agregator = (a, R1, R2, S) => {
		let res = {};
		res["a"] = a;
		res["R1"] = R1;
		res["R2"] = R2;
		res["S"] = S.toFixed(3);
		return res;
	};
	switch (comand) {
		case 1:
			a = num;
			R1 = Math.round((num * Math.sqrt(3)) / 6, 2);
			R2 = 2 * R1;
			S = (num ** 2 * Math.sqrt(3)) / 4;
			break;
		case 2:
			a = (num * 6) / Math.sqrt(3);
			R1 = num;
			R2 = 2 * num;
			S = (num ** 2 * Math.sqrt(3)) / 4;
		case 3:
			a = (R1 * 6) / Math.sqrt(3);
			R1 = R2 / 2;
			R2 = num;
			S = (num ** 2 * Math.sqrt(3)) / 4;
		case 4:
			a = Math.sqrt((4 * num) / Math.sqrt(3));
			R1 = Math.round((a * Math.sqrt(3)) / 6, 2);
			R2 = 2 * R1;
			S = num;
		default:
			"ноу";
	}
	return agregator(a, R1, R2, S);
};

const case13 = (comand, num) => {
	let a;
	let c;
	let h;
	let S;
	let agregator = (a, c, h, S) => {
		let res = {};
		res["a"] = a.toFixed(3);
		res["c"] = c.toFixed(3);
		res["h"] = h.toFixed(3);
		res["S"] = S.toFixed(3);
		return res;
	};
	switch (comand) {
		case 1:
			a = num;
			c = a * Math.sqrt(2);
			h = c / 2;
			S = (c * h) / 2;
			break;
		case 2:
			c = num;
			a = c / Math.sqrt(2);
			h = c / 2;
			S = (c * h) / 2;
		case 3:
			h = num;
			a = c / Math.sqrt(2);
			c = h * 2;
			S = (c * h) / 2;
		case 4:
			S = num;
			a = c / Math.sqrt(2);
			c = h * 2;
			h = Math.sqrt(S);
		default:
			"ноу";
	}
	return agregator(a, c, h, S);
};

const case14 = (comand, num) => {
	let a;
	let R1;
	let R2;
	let S;
	let agregator = (a, R1, R2, S) => {
		let res = {};
		res["a"] = a.toFixed(3);
		res["R1"] = R1.toFixed(3);
		res["R2"] = R2.toFixed(3);
		res["S"] = S.toFixed(3);
		return res;
	};
	switch (comand) {
		case 1:
			a = num;
			R1 = (a * Math.sqrt(3)) / 6;
			R2 = 2 * R1;
			S = (Math.pow(a, 2) * Math.sqrt(3)) / 4;
			break;
		case 2:
			R1 = num;
			a = (6 * R1) / Math.sqrt(3);
			R2 = 2 * R1;
			S = (Math.pow(a) * Math.sqrt(3)) / 4;
		case 3:
			R2 = num;
			R1 = R2 / 2;
			a = (6 * R1) / Math.sqrt(3);
			S = (Math.pow(a) * Math.sqrt(3)) / 4;
		case 4:
			S = num;
			a = Math.sqrt((4 * S) / Math.sqrt(3));
			R1 = (a * Math.sqrt(3)) / 6;
			R2 = +R1 / 2;
		default:
			"ноу";
	}
	return agregator(a, R1, R2, S);
};

export { case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, case11, case12, case13, case14 };
