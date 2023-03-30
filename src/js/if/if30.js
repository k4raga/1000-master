import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '30',
    descriptions: ` Дано  целое  число,  лежащее  в  диапазоне  1–999.  Вывести  его  строку-
                    описание  вида  « четное  двузначное  число»,  «нечетное  трехзначное  число»и т. д.`

})

pastCard(task)
pastInput(task, 'X', 'X')




task.btn().addEventListener('click', (evt) => {

    const X = Number(task.ID().querySelector('.X').value)
    let tre = ' трехзначное '
    let dvu = ' двухзначное '
    let odn = ' однозначное '
    let nul = ' нулевое '
    let chet = ' четное '
    let neChet = ' нечетное '
    let check = '';

    if (X == 0) {
        check += nul
    } else {
        if ((X % 2) == 0) {
            check += chet
        } else {
            check += neChet
        }
        if (Math.floor(X / 100) !== 0) {
            check += tre
        } else if (Math.floor(X / 10) !== 0) {
            check += dvu
        } else {
            check += odn
        }

    }


    task.answer().innerHTML += `</br>` + ' ' + check + ' число '

})