import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '17',
    descriptions: ` Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены  по  возрастанию,  то  удвоить  их;  в  противном  случае  заменитьзначение  каждой  переменной  на  противоположное.  Вывести  новые  значе-ния переменных A, B, C.     `

})

pastCard(task)
pastInput(task, 'C', 'C')
pastInput(task, 'B', 'B')
pastInput(task, 'A', 'A')


task.btn().addEventListener('click', (evt) => {

    const A = Number(task.ID().querySelector('.A').value)
    const B = Number(task.ID().querySelector('.B').value)
    const C = Number(task.ID().querySelector('.C').value)

    let less;
    let mid;
    let bigger;

    if (C > B && B > A || C < B && B < A) {
        bigger = A * 2
        mid = B * 2
        less = C * 2
    } else {
        bigger = -A
        mid = -B
        less = -C
    }


    task.answer().innerHTML += `</br>` + ' A: ' + bigger + ' B: ' + mid + ' C: ' + less

})