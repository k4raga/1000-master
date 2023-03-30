import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '35',
    descriptions: `Даны  координаты  двух  различных  полей  шахматной  доски  x1,  y1,
x2,  y2  ( целые  числа,  лежащие  в  диапазоне  1–8).  Проверить  истинность  вы-
сказывания: «Данные поля имеют одинаковый цвет».`

})

pastCard(task)
pastInput(task, 'Y2', 'Y2')
pastInput(task, 'Y1', 'Y1')

pastInput(task, 'X2', 'X2')
pastInput(task, 'X1', 'X1')






task.btn().addEventListener('click', (evt) => {

    const Y1 = task.ID().querySelector('.Y1').value
    const Y2 = task.ID().querySelector('.Y2').value
    const X1 = task.ID().querySelector('.X1').value
    const X2 = task.ID().querySelector('.X2').value


    const check = X1 + X2 % 2 == 0 && Y1 + Y2 % 2 == 0

    task.answer().innerHTML += `</br>` + 'поля одинаковые? ' + check

})