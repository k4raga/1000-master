import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '33',
    descriptions: `Даны  целые  числа  a,  b,  c.  Проверить  истинность  высказывания:
«Существует треугольник со сторонами a, b, c» `

})

pastCard(task)
pastInput(task, 'C', 'C')
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')






task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value
    const B = task.ID().querySelector('.B').value
    const C = task.ID().querySelector('.C').value


    const check = A <= B+C && B <= A+C && C <= A+B

    task.answer().innerHTML += `</br>` + 'Треугольник существует? ' + check

})