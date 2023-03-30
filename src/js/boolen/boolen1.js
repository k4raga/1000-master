import { Task, pastInput, pastCard } from './boolenConst.js'

    const task = new Task({
        num: '1',
        descriptions: `Дано  целое  число  A.  Проверить  истинность  высказывания:  «Число
                    A является положительным».`
    })

    pastCard(task)
    pastInput(task, 'A', 'A')



task.btn().addEventListener('click', (evt) => {
    const A = task.ID().querySelector('.A').value
    let check = A > 0
    task.answer().innerHTML += 'Положительное? ' + check + `</br>`
})
