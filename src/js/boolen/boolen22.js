import { Task, pastInput, pastCard } from './boolenConst.js'

const task = new Task({
    num: '22',
    descriptions: `ано трехзначное число. Проверить истинность высказывания:«Цифры  данного  числа  образуют  возрастающую  или  убывающую  последовательность».  `

})

pastCard(task)
pastInput(task, 'A', 'A')



task.btn().addEventListener('click', (evt) => {

    const A = task.ID().querySelector('.A').value

    let firstNumb = Math.floor(A / 100)
    let middleNumb = Math.floor((A / 10)) % 10
    let lastNumb = A % 10

    let check = (firstNumb < middleNumb && firstNumb < lastNumb && lastNumb > middleNumb) || (firstNumb > middleNumb && firstNumb > lastNumb && lastNumb < middleNumb)

    task.answer().innerHTML += `</br>` + 'Все цифры данного числа различны ' + check

})