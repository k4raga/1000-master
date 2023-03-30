import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '7',
    descriptions: `Даны  три  целых  числа:  A,  B,  C.  Проверить  истинность  высказывания: «Число B находится между числами A и C». `
})

pastCard(task)
pastInput(task, 'C', 'C')
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')



task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value
    const B = task.ID().querySelector('.B').value
    const C = task.ID().querySelector('.C').value
    let check = A < B && B < C
    task.answer().innerHTML += `</br>` + 'Удовлетворяет неравенству? ' + check

})
