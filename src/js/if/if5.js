import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '5',
    descriptions: `Даны три целых числа. Найти количество положительных и количество отрицательных чисел в исходном наборе.`

})

pastCard(task)
pastInput(task, 'C', 'C')
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')




task.btn().addEventListener('click', (evt) => {

    const A = Number(task.ID().querySelector('.A').value)
    const B = Number(task.ID().querySelector('.B').value)
    const C = Number(task.ID().querySelector('.C').value)
    let pol = 0;
    let otr = 0;

    if (A > 0) {
        pol += 1
    }else {
        otr += 1
    }
    if (B > 0) {
        pol += 1
    } else {
        otr += 1
    }
    if (C > 0) {
        pol += 1
    } else {
        otr += 1
    }
    task.answer().innerHTML += `</br>` + 'положительных: ' + pol + ' отрицательных: ' + otr


})