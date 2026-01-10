var vallidPar = (s) => {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      const topChar = stack.pop();
      if (topChar !== map[char]) {
        return false;
      }
    }
  }
  console.log("stack.length", stack.length);
  return stack.length === 0;
};

console.log(vallidPar("()"));
