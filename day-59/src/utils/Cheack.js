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

const ds = / {2,}/g;
while ((m = ds.exec(text)))
  suggestions.push({
    type: "Extra spaces",
    message: "Multiple spaces found. Use single space.",
  });

const sentences = text.split(/[.?!]\s*/).filter(Boolean);
sentences.forEach((s) => {
  const t = s.trim();
  if (t && t[0] === [0].toLowerCase()) {
    suggestions.push({
      type: "Capitalization",
      message: `Sentence starts with lowercase: "${t.slice(0, 30)}..."`,
    });
  }
  if (t.split(/\s+/).length > 25)
    suggestions.push({
      type: "Lomg sentence",
      message: `Long sentence(${
        t.split(/\s+/).length
      }words). Consider splitting`,
    });
});

if (/\b(their there|there their)\b/i.test(text))
  suggestions.push({
    type: "Confusion",
    message: "Check 'their' vs 'there' vs'they're'.",
  });

if (/\b(was|were|is|are|been|being)\b\s+\w(ed|en)?/i.test(text)) {
  suggestions.push({
    type: "Passive voice",
    message: "Possible passive constuctions found.",
  });
}
