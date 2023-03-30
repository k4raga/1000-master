import { Task, pastInput, pastCard } from './ifConstr.js'

const task = new Task({
    num: '2',
    descriptions: `Дано  целое  число.  Если  оно  является  положительным,  то  прибавить  к  не-
му 1; в противном случае вычесть из него 2. Вывести полученное число. `

})

pastCard(task)
pastInput(task, 'A', 'A')





task.btn().addEventListener('click', (evt) => {

    const A = Number(task.ID().querySelector('.A').value)
    let check;

    if (A > 0) {
        check = A + 1
    } else {
        check = A - 2
    }

    task.answer().innerHTML += `</br>` + check


})