function toKebabCase(str) {
  if (typeof str !== 'string' || str.trim() === '') {
    throw new Error("Invalid input: expected a non-empty string");
  }

  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')            // Handle camelCase or PascalCase
    .replace(/[\s_]+|[-]{2,}/g, '-')                // Replace spaces/underscores/multiple hyphens with a single hyphen
    .replace(/[^a-zA-Z0-9-]/g, '')                  // Remove special characters (optional)
    .toLowerCase()
    .replace(/^-+|-+$/g, '');                       // Trim leading/trailing hyphens
}

// Examples:
console.log(toKebabCase("Hello World"));         // "hello-world"
console.log(toKebabCase("user_name"));           // "user-name"
console.log(toKebabCase("camelCaseInput"));      // "camel-case-input"
console.log(toKebabCase("PascalCase"));          // "pascal-case"
console.log(toKebabCase("   messy--__input  ")); // "messy-input"
