import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '6',
    descriptions: `Даны два числа. Вывести большее из них. `

})

pastCard(task)
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')




task.btn().addEventListener('click', (evt) => {

    const A = Number(task.ID().querySelector('.A').value)
    const B = Number(task.ID().querySelector('.B').value)
    let check;

    if(A>B){
        check = A
    } else {
        check = B
    }


    task.answer().innerHTML += `</br>` + 'большее ' + check


})