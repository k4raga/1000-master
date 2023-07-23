function for1(K, N) {
	let answer = [];
	if (N <= 0) {
		alert("число должно быть больше нуля");
	} else {
		for (let i = 0; i <= N; i++) {
			answer.push(K);
		}
	}
	return answer;
}

function for2(A, B) {
	let answer = [];
	if (A > B) {
		alert("A должно быть больше B");
	} else {
		for (let i = A; i <= B; i++) {
			answer.push(i);
		}
	}
	return answer;
}
function for3(A, B) {
	let answer = [];
	if (A > B) {
		alert("A должно быть больше B");
	} else {
		for (let i = B - 1; i >= A + 1; i--) {
			answer.push(i);
		}
	}
	return answer;
}
function for4(price) {
	let answer = [];
	for (let i = 1; i <= 10; i++) {
		let priceSum = i * price;
		answer.push(priceSum);
	}
	return answer;
}
function for5(price) {
	let answer = [];
	for (let i = 1; i <= 10; i++) {
		let newI = i * 0.1;
		let priceSum = newI * price;
		answer.push(" " + priceSum.toFixed(2));
	}
	return answer;
}
function for6(price) {
	let answer = [];
	for (let i = 10; i <= 20; i += 2) {
		let newI = (i * 0.1).toFixed(1);
		console.log(newI);
		let priceSum = newI * price;
		answer.push(" " + priceSum.toFixed(1));
	}
	return answer;
}
function for7(A, B) {
	let newA = 0;
	if (B < A) {
		alert("A больше Б, брооо");
	} else {
		for (A; A <= B; A++) {
			newA += A;
		}
	}
	return newA;
}
function for8(A, B) {
	let newA = 1;
	if (B < A) {
		alert("A больше Б, брооо");
	} else {
		for (A; A <= B; A++) {
			newA = A * newA;
		}
	}
	return newA;
}
function for9(A, B) {
	let newA = 1;
	if (B < A) {
		alert("A больше Б, брооо");
	} else {
		for (A; A <= B; A++) {
			newA += Math.sqrt(A, 2);
			console.log(newA);
		}
	}
	return newA;
}
function for10(N) {
	let newA = 0;
	for (let i = 1; i <= N; i++) {
		newA += 1 / i;
	}
	return newA;
}

function for11(N) {
	let newA = 0;
	for (let i = 1; i <= N; i++) {
		newA = Math.pow(N, 2) + Math.pow(N + i, 2);
	}
	return newA;
}
function for12(N) {
	let newA = 1;
	for (let i = 1; i <= N; i++) {
		let newI = 1 + i * 0.1;
		newA = newA * newI;
	}
	return newA;
}

function for13(N) {
	let newA = 0;
	for (let i = 2; i <= N * 2; i += 2) {
		let newI = 1 + i * 0.1;
		let difI = newI - 0.1;
		newA += difI - newI;
		console.log(newA);
	}
	return newA;
}
export { for1, for2, for3, for4, for5, for6, for7, for8, for9, for10, for11, for12, for13 };
