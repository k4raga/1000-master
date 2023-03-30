import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '19',
    descriptions: `Проверить  истинность  высказывания:  «Среди  трех  данных  целых чисел есть хотя бы одна пара взаимно противоположных». `

})

pastCard(task)
pastInput(task, 'C', 'C')
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')



task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value
    const B = task.ID().querySelector('.B').value
    const C = task.ID().querySelector('.C').value

    let check = A == -B || A == -C || B == -C || -A == B || -A == C || -B == C

    task.answer().innerHTML += `</br>` + 'Среди  трех  данных  целых чисел есть хотя бы одна пара совпадающих ' + check

})