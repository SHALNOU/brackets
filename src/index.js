module.exports = function check(str, bracketsConfig) {

	const bracketsPair = {}
	for (let i = 0; i < bracketsConfig.length; i++) {
		bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0]
	}

	let stack = []

	for (let i = 0; i < str.length; i++) {
		let currentSymbol = str[i]
		let topElement = stack[stack.length - 1]

		if (stack.length === 0) {
			stack.push(currentSymbol)
		} else {
			if (bracketsPair[currentSymbol] === topElement) {
				stack.pop()
			} else {
				stack.push(currentSymbol)
			}
		}
	}
	return stack.length === 0
};