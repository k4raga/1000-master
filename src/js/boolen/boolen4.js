import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '4',
    descriptions: `Даны  два  целых  числа:  A,  B.  Проверить  истинность  высказывания:
                    «Справедливы неравенства A > 2 и B ≤ 3». `
})

pastCard(task)
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')



task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value
    const B = task.ID().querySelector('.B').value
    let check = A > 2 && B <= 3
    task.answer().innerHTML += `</br>` + 'Удовлетворяет неравенству? ' + check

})
