function toCamelCase(str) {
  if (typeof str !== 'string' || str.trim() === '') {
    throw new Error("Invalid input: expected a non-empty string");
  }

  return str
    .trim()
    .toLowerCase()
    .split(/[\s_-]+/)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}

// Examples:
console.log(toCamelCase("first name"));        // "firstName"
console.log(toCamelCase("user_id"));           // "userId"
console.log(toCamelCase("SCREEN_NAME"));       // "screenName"
console.log(toCamelCase("mobile-number"));     // "mobileNumber"
console.log(toCamelCase("  mixed-CASE_input")); // "mixedCaseInput"
