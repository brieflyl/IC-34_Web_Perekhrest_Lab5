function checkBrackets(str) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of str) {
        if (brackets[char]) {
            stack.push(char);
        } 
        else if (Object.values(brackets).includes(char)) {
            const lastBracket = stack.pop();
            if (brackets[lastBracket] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(`Code without errors returns: ${checkBrackets("function someFn() { return [1, 2, 3]; }")}`); // true
console.log(`Code with errors returns: ${checkBrackets("function someFn() { return [1, 2, 3; }")}`);  // false