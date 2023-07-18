const container = document.querySelector(".container");

const title = "for";

class Task {
	constructor(options) {
		this.num = options.num;
		this.descriptions = options.descriptions;
	}
	createCard() {
		return `<article id="${title}${this.num}">
                    <h2 class="title">${title}${this.num}</h2>
                    <h3>${this.descriptions}</h3>
                    <div class="input-wrap">
                        <div class="answer">Ответ: </div>
                        <input class="button" type="button" value="Найти" />
                    </div>
                </article>
            <div class="line" ></div >`;
	}

	createInput(inputClass, placeholder) {
		return `<input class= '${String(inputClass)}' type="text" placeholder="${String(placeholder)} " />`;
	}

	ID() {
		let ID = document.querySelector("#" + String(title) + String(this.num));
		return ID;
	}

	answer() {
		let ID = document.querySelector("#" + title + String(this.num));
		let answer = ID.querySelector(".answer");
		return answer;
	}

	btn() {
		let ID = document.querySelector("#" + title + String(this.num));
		let button = ID.querySelector(".button");
		return button;
	}

	inputWrap() {
		let ID = document.querySelector("#" + title + String(this.num));
		let inputWrap = ID.querySelector(".input-wrap");
		return inputWrap;
	}
}

function pastInput(className, inputClass, placeholder) {
	let input = className.createInput(inputClass, placeholder);
	className.inputWrap().insertAdjacentHTML("afterbegin", input);
}

function pastCard(className) {
	container.insertAdjacentHTML("beforeend", className.createCard());
}

export { Task, container, pastInput, pastCard, title };
