import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '7',
    descriptions: `Даны два числа. Вывести порядковый номер меньшего из них.  `

})

pastCard(task)
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')




task.btn().addEventListener('click', (evt) => {

    const A = Number(task.ID().querySelector('.A').value)
    const B = Number(task.ID().querySelector('.B').value)
    let check;

    if (A > B) {
        check = 1
    } else {
        check = 2
    }


    task.answer().innerHTML += `</br>` + 'номер большего ' + check


})