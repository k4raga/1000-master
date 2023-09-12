export function for1(K, N) {
	let answer = [];
	if (N <= 0) {
		alert("число должно быть больше нуля");
	} else {
		for (let i = 1; i <= N; i++) {
			answer.push(K);
		}
	}
	return answer;
}

export function for2(A, B) {
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
export function for3(A, B) {
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
export function for4(price) {
	let answer = [];
	for (let i = 1; i <= 10; i++) {
		let priceSum = i * price;
		answer.push(priceSum);
	}
	return answer;
}
export function for5(price) {
	let answer = [];
	for (let i = 1; i <= 10; i++) {
		let newI = i * 0.1;
		let priceSum = newI * price;
		answer.push(" " + priceSum.toFixed(2));
	}
	return answer;
}
export function for6(price) {
	let answer = [];
	for (let i = 10; i <= 20; i += 2) {
		let newI = (i * 0.1).toFixed(1);
		console.log(newI);
		let priceSum = newI * price;
		answer.push(" " + priceSum.toFixed(1));
	}
	return answer;
}
export function for7(A, B) {
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
export function for8(A, B) {
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
export function for9(A, B) {
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
export function for10(N) {
	let newA = 0;
	for (let i = 1; i <= N; i++) {
		newA += 1 / i;
	}
	return newA;
}

export function for11(N) {
	let newA = 0;
	for (let i = 1; i <= N; i++) {
		newA = Math.pow(N, 2) + Math.pow(N + i, 2);
	}
	return newA;
}
export function for12(N) {
	let newA = 1;
	for (let i = 1; i <= N; i++) {
		let newI = 1 + i * 0.1;
		newA = newA * newI;
	}
	return newA;
}

export function for13(N) {
	let newA = 0;
	for (let i = 2; i <= N * 2; i += 2) {
		let newI = 1 + i * 0.1;
		let difI = newI - 0.1;
		newA += difI - newI;
		console.log(newA);
	}
	return newA;
}
export function for14(N) {
	let arr = [];
	for (let i = 1; i <= N; i++) {
		let newI = 2 * i - 1;
		arr.push(newI);
		console.log(newI);
	}
	return arr;
}
export function for15(A, N) {
	let newA = 1;
	for (let i = 1; i <= N; i++) {
		newA = A * newA;
	}
	return newA;
}
export function for16(A, N) {
	let newA = 1;
	let arr = [];
	for (let i = 1; i <= N; i++) {
		newA = A * newA;
		arr.push(newA);
	}
	return arr;
}

export function for17(A, N) {
	let newA = 1;
	let arr = [];
	for (let i = 1; i <= N; i++) {
		newA = A * newA;
		arr.push(newA);
	}
	let res = arr.reduce((a, b) => a + b);
	return res;
}

export function for18(A, N) {
	let newA = 1;
	let res = 1;
	let arr = [];
	for (let i = 1; i <= N; i++) {
		let oldA = newA;
		newA = A * newA;

		let minus = oldA - newA;
		res = res + minus;
	}
	return res;
}

export function for19(N) {
	let newA = 1;
	let res = 1;
	let arr = [];
	for (let i = 1; i <= N; i++) {
		arr.push(i);
		res = arr.reduce((a, b) => a * b);
	}
	return res;
}
export function for20(N) {
	let res = 0;
	let res2 = 0;
	let arr = [];
	for (let i = 1; i <= N; i++) {
		arr = [];
		for (let c = 1; c <= i; c++) {
			arr.push(c);
			res = arr.reduce((a, b) => a * b);
		}
		res2 = res2 + res;
	}
	return res2;
}

export function for21(N) {
	let res = 0;
	let res2 = 1;
	let arr = [];
	for (let i = 1; i <= N; i++) {
		arr = [];
		for (let c = 1; c <= i; c++) {
			arr.push(c);
			res = arr.reduce((a, b) => a * b);
		}
		res2 = 1 / res2 + 1 / res;
	}
	return res2;
}

export function fact(num) {
	let arr = [];
	let res = 1;
	for (let i = 1; i <= num; i++) {
		arr.push(i);
		res = arr.reduce((a, b) => a * b);
	}
	console.log(res);
	return res;
}
export function for22(X, N) {
	// 1 + x/!1 + x^2/!2 + ... x^N/!N
	let res = 1;
	let res3 = 1;
	let arr = [];
	for (let i = 0; i <= N; i++) {
		res = Math.pow(X, i) / fact(i);
		arr.push(res);
		res3 = arr.reduce((a, b) => a + b);
	}
	return res3;
}
//x-x^3/!3+x^5/!5-...((-1)^N)*x^(2*N+1)/(2*N+1)!
export function for23(X, N) {
	let arr = [];
	let res2 = X;
	function denominator(N) {
		let twice = 2 * N;
		return fact(twice + 1);
	}
	function numerator(X, N) {
		let sign = Math.pow(-1, N);
		let twice = 2 * N;
		return sign * Math.pow(X, twice + 1);
	}
	for (let i = 0; i <= N; i++) {
		let res = numerator(X, i) / denominator(i);
		arr.push(res);
		res2 = arr.reduce((a, b) => a + b);
	}
	return res2;
}
export function for24(X, N) {
	let arr = [];
	let res2 = X;
	function denominator(N) {
		let twice = 2 * N;
		return fact(twice);
	}
	function numerator(X, N) {
		let sign = Math.pow(-1, N);
		let twice = 2 * N;
		return sign * Math.pow(X, twice);
	}
	for (let i = 0; i <= N; i++) {
		let res = numerator(X, i) / denominator(i);
		arr.push(res);
		res2 = arr.reduce((a, b) => a + b);
	}
	return res2;
}
export function for25(X, N) {
	let arr = [];
	let res2 = X;
	for (let i = 1; i <= N; i++) {
		let sign = Math.pow(-1, i - 1);
		let res = (sign * Math.pow(X, i)) / i;
		arr.push(res);
		res2 = arr.reduce((a, b) => a + b);
	}
	return res2;
}
export function for26(X, N) {
	//X — X^3/3 + X^5/5 -…+ (-1)^N*X^(2*N+1)/(2*N+1).
	let arr = [X];
	function numerator() {}
	for (let i = 1; i <= N; i++) {
		let arc = 2 * i + 1;
		let exp = (Math.pow(-1, i) * Math.pow(X, arc)) / arc;
		arr.push(exp);
	}
	return arr.reduce((a, b) => a + b);
}
export function for27(X, N) {
	//X — X^3/3 + X^5/5 -…+ (-1)^N*X^(2*N-1)/(2*N-1).
	let arr = [X];
	function numerator() {}
	for (let i = 1; i <= N; i++) {
		let arc = 2 * i + 1;
		let exp = (Math.pow(-1, i) * Math.pow(X, arc)) / arc;
		arr.push(exp);
	}
	return arr.reduce((a, b) => a + b);
}

export function for28(X, N) {
	let arr = [];
	function progression(n) {
		let arrProgression = [];
		for (let i = 1; i <= n; i++) {
			arrProgression.push(i * 2);
		}
		return arrProgression.reduce((a, b) => a * b);
	}
	function progressionMinus(n) {
		let arrProgression = [1];
		for (let i = 2; i <= n; i++) {
			arrProgression.push(i * 2 - 3);
		}
		return arrProgression.reduce((a, b) => a * b);
	}
	for (let i = 1; i <= N; i++) {
		let res = (Math.pow(-1, i) * progressionMinus(i) * Math.pow(X, i)) / progression(i);
		arr.push(res);
	}
	return arr.reduce((a, b) => a + b);
}

export function for29(N, B, A) {
	let res;
	let arr = [A];
	if (A < B) {
		if (N > 1) {
			let H = (B - A) / N;
			console.log("H =" + H);
			for (let i = H; i <= H * N; i = i + H) {
				console.log("I = " + i);
				arr.push(A + i);
				res = arr;
				console.log("arr = " + arr);
				console.log("res = " + res);
			}
		} else {
			res = "Неправильные значения";
		}
	} else {
		res = "Неправильные значения";
	}
	return res;
}

export function for30(N, B, A) {
	let arr = [];
	if (N > 14) {
		if (A < B) {
			let diff = B - A;
			let H = diff / N;
			console.log(H);
			function sinXMin(x) {
				return 1 - Math.sin(x);
			}
			for (let i = 1; i <= N; i++) {
				arr.push(sinXMin(A + H * i));
			}
		} else {
			console.log("А должно быть меньше чем Б ");
		}
	} else {
		console.log("число N меньше 14");
	}
	return arr;
}
export function for31(N) {
	let arr = [2];
	let lastRes = 2;
	for (let i = 2; i <= N; i++) {
		arr.push(2 + i / lastRes);
		lastRes = arr[arr.length - 1];
	}
	return arr;
}
export function for32(N) {
	let arr = [1];
	let lastRes = 1;
	for (let i = 0; i <= N; i++) {
		arr.push((lastRes + 1) / i);
		lastRes = arr[arr.length - 1];
	}
	return arr;
}

export function for33(N) {
	let arr = [1, 1];
	let res = [];
	for (let i = 2; i <= N; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
		//console.log("первое число " + arr[i - 1] + " " + "Второе число " + arr[i - 2] + " Массив " + arr);
		res = arr;
	}
	return res;
}
