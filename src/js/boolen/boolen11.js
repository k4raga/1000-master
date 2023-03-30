import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '11',
    descriptions: `Даны два целых числа: A, B. Проверить истинность высказывания:
                    «Числа A и B имеют одинаковую четность».`

})

pastCard(task)
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')



task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value
    const B = task.ID().querySelector('.B').value
    let check = (A % 2 == 0 && B % 2 == 0) || (A % 2 !== 0 && B % 2 !== 0)
    task.answer().innerHTML += `</br>` + 'Числа A и B имеют одинаковую четность ' + check

})
