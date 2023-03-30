import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '9',
    descriptions: `Даны  две  переменные  вещественного  типа:  A,  B.  Перераспределить  значения  данных  переменных  так,  чтобы  в  A  оказалось  меньшее  из  значений,а в B — большее. Вывести новые значения переменных A и B. `

})

pastCard(task)
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')




task.btn().addEventListener('click', (evt) => {

    const A = Number(task.ID().querySelector('.A').value)
    const B = Number(task.ID().querySelector('.B').value)
    let bigger;
    let less;

    if (A > B) {
        bigger = A
        less = B
    } else {
        bigger = B
        less = A
    }


    task.answer().innerHTML += `</br>` + 'Большее ' + bigger + ' меньшее ' + less

})