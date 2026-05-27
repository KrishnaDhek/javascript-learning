class GenerateParentheses {
  generateParenthesis(n) {
    const result = [];

    this.generateParenthesisHelper(result, '', n, n);

    return result;
  }

  generateParenthesisHelper(result, current, open, close) {
    // Base case
    if (open === 0 && close === 0) {
      result.push(current);
      return;
    }

    // Add opening parenthesis
    if (open > 0) {
      this.generateParenthesisHelper(result, current + '(', open - 1, close);
    }

    // Add closing parenthesis
    if (close > open) {
      this.generateParenthesisHelper(result, current + ')', open, close - 1);
    }
  }
}

// Main function
const generator = new GenerateParentheses();

const n = 3;

const combinations = generator.generateParenthesis(n);

for (const combo of combinations) {
  console.log(combo);
}
