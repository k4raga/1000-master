import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '16',
    descriptions: `Дано целое положительное число. Проверить истинность высказывания: «Данное число является четным двузначным». `

})

pastCard(task)
pastInput(task, 'A', 'A')



task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value
    let check = A % 2 == 0 && A.toString().length == 2

    task.answer().innerHTML += `</br>` + 'Данное число является четным двузначным ' + check

})