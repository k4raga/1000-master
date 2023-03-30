import { Task, pastInput, pastCard } from './caseConstr.js'

const task = new Task({
    num: '1',
    descriptions: `Дано целое число в диапазоне 1–7. Вывести строку — название дня не-
                    дели,  соответствующее  данному  числу  (1  —  «понедельник»,  2  —  «втор-
                    ник» и т. д.). `

})

pastCard(task)
pastInput(task, 'A', 'A')

let day;


task.btn().addEventListener('click', (evt) => {

    const A = Number(task.ID().querySelector('.A').value)

    check(A)

    task.answer().innerHTML += `</br>` + day

})

module.exports = { check }
