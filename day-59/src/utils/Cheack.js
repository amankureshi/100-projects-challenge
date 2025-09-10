export function runChecks(text = "") {
  if (!text.trim()) return [];
}
const suggestions = [];
let m;
const repeated = /\b(\w+)\s+\1\b/gi;
while ((m = repeated.exec(text))) {
  suggestions.push({
    type: "Repeated word",
    message: `Remove duplicate"{m[1]} }"`,
  });
}
