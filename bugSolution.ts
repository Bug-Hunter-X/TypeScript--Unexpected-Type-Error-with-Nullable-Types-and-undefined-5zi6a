function greet(name: string | null | undefined): string {
  if (name === null || name === undefined) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Works as expected
console.log(greet(undefined)); // Works as expected
console.log(greet("Alice")); // Works as expected