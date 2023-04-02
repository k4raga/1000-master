
const case1 = (num) => {
    let day;
    switch (num) {

        case 1: day = ' понедельник '
            break;

        case 2: day = ' вторник '
            break;

        case 3: day = ' среда '
            break;

        case 4: day = ' четверг '
            break;

        case 5: day = ' пятница '
            break;

        case 6: day = ' суббота '
            break;

        case 7: day = ' воскресенье '
            break;

        default:
            day = ' нет такого дня '
    }
    return day;
}

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
	switch ((num)) {
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
			break

		default:
			operation = " нет такого знака ";
	}
	return operation;
};
export { case1, case2, case3, case4, case5  };