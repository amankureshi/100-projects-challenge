export function runChecks(text = "") {
  if (!text || !text.trim()) return [];

  const suggestions = [];
  let m;

  const repeated = /\b(\w+)\s+\1\b/gi;
  while ((m = repeated.exec(text))) {
    suggestions.push({
      type: "Repeated word",
      message: `Remove duplicate"${m[1]}".`,
    });
  }

  const ds = / {2,}/g;
  while ((m = ds.exec(text)))
    suggestions.push({
      type: "Extra spaces",
      message: "Multiple spaces found. Use single space.",
      exampleFix: "Replace with single space",
    });

  const sentences = text.split(/[.?!]\s*/).filter(Boolean);
  sentences.forEach((s) => {
    const t = s.trim();
    if (!t) return;
    if (t && t[0] === t[0].toLowerCase()) {
      suggestions.push({
        type: "Capitalization",
        message: `Sentence starts with lowercase: "${t.slice(0, 30)}...".`,
        exampleFix: t[0].toUpperCase() + t.slice(1),
      });
    }
    const wordCount = t.split(/\s+/).length;
    if (wordCount > 25) {
      suggestions.push({
        type: "Long sentence",
        message: `Long sentence (${wordCount} words). Consider splitting for clarity.`,
      });
    }
  });

  if (
    /\b(their there|there their | they're their| their they're)\b/i.test(text)
  ) {
    suggestions.push({
      type: "Confusion",
      message: "Check 'their' / 'there'/ 'they're' usage.",
    });
  }

  if (/\b(was|were|is|are|been|being)\b\s+\w+(ed|en)?/i.test(text)) {
    suggestions.push({
      type: "Passive voice(hint)",
      message:
        "Possible passive constuctions found.Prefer active voice if appropriate",
    });
  }

  const seen = new Set();
  return suggestions.filter((s) => {
    if (seen.has(s.message)) return false;
    seen.add(s.message);
    return true;
  });
}
