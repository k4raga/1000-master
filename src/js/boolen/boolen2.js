import { Task, pastInput, pastCard } from './boolenConst.js'

const task2 = new Task({
    num: '2',
    descriptions: `Дано целое число A. Проверить истинность высказывания: «Число A
                    является нечетным».`
})

pastCard(task2)
pastInput(task2, 'A', 'A')


const answer = task2.answer()
const btn2 = task2.btn()

const id = document.querySelector('#boolen2')
const btn = id.querySelector('.button')
console.log(id)
console.log(btn)


task2.btn().addEventListener('click', (evt) => {

    const A = task2.ID().querySelector('.A').value
    let check = A % 2 == !0
    answer.innerHTML += `</br>` + 'Нечетное? ' + check

})

