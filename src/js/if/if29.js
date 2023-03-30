import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '29',
    descriptions: ` Дано целое число. Вывести его строку-описание вида «отрицательное чет-
                    ное число», «нулевое число», «положительное нечетное число» и т. д.`

})

pastCard(task)
pastInput(task, 'X', 'X')




task.btn().addEventListener('click', (evt) => {

    const X = Number(task.ID().querySelector('.X').value)

    let pol = ' положительное '
    let otr = ' отрицательное '
    let nul = ' нулевое '
    let chet = ' четное '
    let neChet = ' нечетное '
    let check = '';

    if (X ==0 ) {
        check += nul
    } else {
        if (X > 0) {
            check += pol
        } else {
            check += otr
        }
        if ((X % 2) == 0) {
            check += chet
        } else {
            check += neChet
        }
    }


    task.answer().innerHTML += `</br>` + ' ' + check + ' число '

})