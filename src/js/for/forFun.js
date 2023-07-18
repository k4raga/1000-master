function for1(K, N) {
	let answer = [];
	if (N <= 0) {
		alert("число должно быть больше нуля");
	} else {
		for (let i = 0; i <= K; i++) {
			answer.push(N);
		}
	}
	return answer;
}
export { for1 };
