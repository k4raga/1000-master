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

const case15 = (num, suit) => {
	let res;
	switch (num) {
		case 6:
			res = "шестерка ";
			switch (suit) {
				case 1:
					res += "пики";
					break;
				case 2:
					res += "трефы";
					break;
				case 3:
					res += "бубны";
					break;
				case 4:
					res += "червы";
					break;
			}
			break;
		case 7:
			res = "семерка ";
			switch (suit) {
				case 1:
					res += "пики";
					break;
				case 2:
					res += "трефы";
					break;
				case 3:
					res += "бубны";
					break;
				case 4:
					res += "червы";
					break;
			}
			break;
		case 8:
			res = "восьмерка ";
			switch (suit) {
				case 1:
					res += "пики";
					break;
				case 2:
					res += "трефы";
					break;
				case 3:
					res += "бубны";
					break;
				case 4:
					res += "червы";
					break;
			}
			break;
		case 9:
			res = "девятка ";
			switch (suit) {
				case 1:
					res += "пики";
					break;
				case 2:
					res += "трефы";
					break;
				case 3:
					res += "бубны";
					break;
				case 4:
					res += "червы";
					break;
			}
			break;
		case 10:
			res = "десятка ";
			switch (suit) {
				case 1:
					res += "пики";
					break;
				case 2:
					res += "трефы";
					break;
				case 3:
					res += "бубны";
					break;
				case 4:
					res += "червы";
					break;
			}
			break;
		case 11:
			res = "валет ";
			switch (suit) {
				case 1:
					res += "пики";
					break;
				case 2:
					res += "трефы";
					break;
				case 3:
					res += "бубны";
					break;
				case 4:
					res += "червы";
					break;
			}
			break;
		case 12:
			res = "дама ";
			switch (suit) {
				case 1:
					res += "пики";
					break;
				case 2:
					res += "трефы";
					break;
				case 3:
					res += "бубны";
					break;
				case 4:
					res += "червы";
					break;
			}
			break;
		case 13:
			res = "король ";
			switch (suit) {
				case 1:
					res += "пики";
					break;
				case 2:
					res += "трефы";
					break;
				case 3:
					res += "бубны";
					break;
				case 4:
					res += "червы";
					break;
			}
			break;
		case 14:
			res = "туз ";
			switch (suit) {
				case 1:
					res += "пики";
					break;
				case 2:
					res += "трефы";
					break;
				case 3:
					res += "бубны";
					break;
				case 4:
					res += "червы";
					break;
			}
			break;
		default:
			"ноу";
	}
	return res;
};

let case16 = (age) => {
	let res;
	switch (age) {
		case 20:
		case 25:
		case 26:
		case 27:
		case 28:
		case 29:
		case 30:
		case 35:
		case 36:
		case 37:
		case 38:
		case 39:
		case 40:
		case 45:
		case 46:
		case 47:
		case 48:
		case 49:
		case 50:
		case 55:
		case 56:
		case 57:
		case 58:
		case 59:
		case 60:
		case 65:
		case 66:
		case 67:
		case 68:
		case 69:
			res = age + " лет";
			break;
		case 21:
		case 31:
		case 41:
		case 51:
		case 61:
			res = age + " год";
			break;
		case 22:
		case 23:
		case 24:
		case 32:
		case 33:
		case 34:
		case 42:
		case 43:
		case 44:
		case 52:
		case 53:
		case 54:
		case 62:
		case 63:
		case 64:
			res = age + "года";
			break;
	}
	return res;
};

let case17 = (learnTask) => {
	let res;
	let firstNum = Math.floor(learnTask / 10);
	let lastNum = learnTask % 10;

	switch (firstNum) {
		case 1:
			switch (lastNum) {
				case 0:
					res += "десять ";
					break;
				case 1:
					res += "одиннадцать ";
					break;
				case 2:
					res += "двенадцать ";
					break;
				case 3:
					res += "тринадцать ";
					break;
				case 4:
					res += "четырнадцать ";
					break;
				case 15:
					res += "пятнадцать ";
					break;
				case 16:
					res += "шестнадцать ";
					break;
				case 17:
					res += "семнадцать ";
					break;
				case 18:
					res += "восемнадцать ";
					break;
				case 19:
					res += "девятнадцать ";
					break;
			}
		case 2:
			res = "двадцать ";
			switch (lastNum) {
				case 1:
					res += "один ";
					break;
				case 2:
					res += "два ";
					break;
				case 3:
					res += "три ";
					break;
				case 4:
					res += "четыре ";
					break;
				case 5:
					res += "пять ";
					break;
				case 6:
					res += "шесть ";
					break;
				case 7:
					res += "семь ";
					break;
				case 8:
					res += "восемь ";
					break;
				case 9:
					res += "девять ";
					break;
			}
			break;
		case 3:
			res = "тридцать ";
			switch (lastNum) {
				case 1:
					res += "одно ";
					break;
				case 2:
					res += "два ";
					break;
				case 3:
					res += "три ";
					break;
				case 4:
					res += "четыре ";
					break;
				case 5:
					res += "пять ";
					break;
				case 6:
					res += "шесть ";
					break;
				case 7:
					res += "семь ";
					break;
				case 8:
					res += "восемь ";
					break;
				case 9:
					res += "девять ";
					break;
			}
			break;
		case 4:
			res = "сорок ";
			break;
	}
	switch (learnTask) {
		case 10:
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 20:
		case 25:
		case 26:
		case 27:
		case 28:
		case 29:
		case 35:
		case 36:
		case 37:
		case 38:
		case 39:
			res += "учебных заданий";
			break;
		case 21:
		case 31:
			res += "учебное задание";
			break;
		case 22:
		case 23:
		case 24:
		case 32:
		case 33:
		case 34:
			res += "учебных задания";
			break;
	}
	return res;
};

let case18 = (num) => {
	let res ='';
	let firstNumber = Math.floor(num / 100);
	let secondNumber = Math.floor(num / 10) % 10;
	let lastNumber = num % 10;
	switch (firstNumber) {
		case 1:
			res += "Сто ";
			break;
		case 2:
			res += "Двести ";
			break;
		case 3:
			res += "Триста ";
			break;
		case 4:
			res += "Четыреста ";
			break;
		case 5:
			res += "Пятьсот ";
			break;
		case 6:
			res += "Шестьсот ";
			break;
		case 7:
			res += "Семьсот ";
			break;
		case 8:
			res += "Восемьсот ";
		case 9:
			res += "Девятьсот ";
		default:
			break;
	}
	switch ((secondNumber)) {
		case 0:
			break;
		case 1:
			switch (lastNumber) {
				case 0:
					res += "десять";
					break;
				case 1:
					res += "одиннадцать";
					break;
				case 2:
					res += "двенадцать";
					break;
				case 3:
					res += "тринадцать";
					break;
				case 4:
					res += "четырнадцать";
					break;
				case 5:
					res += "пятнадцать";
					break;
				case 6:
					res += "шестнадцать";
					break;
				case 7:
					res += "семнадцать";
					break;
				case 8:
					res += "восемнадцать";
					break;
				case 10:
					res += "девятнадцать";
					break;
			}
			break;
		case 2:
			res += "двадцать ";
			break;
		case 3:
			res += "тридцать ";
			break;
		case 4:
			res += "сорок ";
			break;
		case 5:
			res += "пятьдесят ";
			break;
		case 6:
			res += "шестьдесят ";
			break;
		case 7:
			res += "семьдесят ";
			break;
		case 8:
			res += "весьмьдесят ";
		case 9:
			res += "девяносто ";
		default:
			break;
	}
	if (secondNumber != 1) {
		switch ((lastNumber)) {
			case 0:
				break;
			case 1:
				res += "один";
				break;
			case 2:
				res += "два";
				break;
			case 3:
				res += "три";
				break;
			case 4:
				res += "четыре";
				break;
			case 5:
				res += "пять";
				break;
			case 6:
				res += "шесть";
				break;
			case 7:
				res += "семь";
				break;
			case 8:
				res += "восемь";
				break;
			case 9:
				res += "девять";
				break;
		}
	} else {
		return res;
	}
	return res;
};
export { case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, case11, case12, case13, case14, case15, case16, case17, case18 };
