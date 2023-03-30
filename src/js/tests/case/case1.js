const check = (num) => {
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
