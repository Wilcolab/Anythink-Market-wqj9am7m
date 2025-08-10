function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(/[_\s-]+/)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}

// Example usage:
console.log(toCamelCase("hello_world")); // Output: "helloWorld"
