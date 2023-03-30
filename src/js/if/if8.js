import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '8',
    descriptions: `Даны два числа. Вывести вначале большее, а затем меньшее из них`

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