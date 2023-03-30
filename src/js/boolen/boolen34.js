import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '34',
    descriptions: `Даны  координаты  поля  шахматной  доски  x,  y  ( целые  числа,  лежа-
щие в диапазоне 1–8). Учитывая, что левое нижнее поле доски (1, 1) явля-
ется  черным,  проверить  истинность  высказывания:  «Данное поле является
белым».`

})

pastCard(task)
pastInput(task, 'Y', 'Y')
pastInput(task, 'X', 'X')






task.btn().addEventListener('click', (evt) => {

    const Y = task.ID().querySelector('.Y').value
    const X = task.ID().querySelector('.X').value



    const check = X % 2 == 0 && Y % 2 !== 0 || X % 2 != 0 && Y % 2 == 0

    task.answer().innerHTML += `</br>` + 'поле белое? ' + check

})