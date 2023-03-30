import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '24',
    descriptions: `Даны числа A, B, C (число A не равно 0). Рассмотрев дискриминант
D = B2 – 4·A·C,  проверить  истинность  высказывания:  «Квадратное  уравне-
ние A·x2 + B·x + C = 0 имеет вещественные корни».  `

})

pastCard(task)
pastInput(task, 'C', 'C')
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')



task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value
    const B = task.ID().querySelector('.B').value
    const C = task.ID().querySelector('.C').value

    const check = (Math.pow(B, 2) - 4*A*C) >= 0

    task.answer().innerHTML += `</br>` + 'Данное число читается одинаково слева направо и справа налево ' + check

})