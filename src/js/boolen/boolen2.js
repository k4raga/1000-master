import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '2',
    descriptions: `Дано целое число A. Проверить истинность высказывания: «Число A
                    является нечетным».`
})

pastCard(task)
pastInput(task, 'A', 'A')

task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value
    let check = A % 2 == !0
    task.answer().innerHTML += `</br>` + 'Нечетное? ' + check

})

