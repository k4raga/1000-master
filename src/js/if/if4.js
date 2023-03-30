import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '4',
    descriptions: `Даны  три  целых  числа.  Найти  количество  положительных  чисел  в  исход-
                    ном наборе.`

})

pastCard(task)
pastInput(task, 'C', 'C')
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')




task.btn().addEventListener('click', (evt) => {

    const A = Number(task.ID().querySelector('.A').value)
    const B = Number(task.ID().querySelector('.B').value)
    const C = Number(task.ID().querySelector('.C').value)
    let check = 0;

    if (A > 0) {
        check += 1
    }
    if (B > 0) {
        check += 1
    }
    if (C > 0) {
        check += 1
    }
    task.answer().innerHTML += `</br>` + check


})