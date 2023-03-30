import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '5',
    descriptions: `Даны  два  целых  числа:  A,  B.  Проверить  истинность  высказывания:
                    «Справедливы неравенства A ≥ 0 или B < –2».  `
})

pastCard(task)
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')



task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value
    const B = task.ID().querySelector('.B').value
    let check = A >= 2 || B <= -2
    task.answer().innerHTML += `</br>` + 'Удовлетворяет неравенству? ' + check

})
