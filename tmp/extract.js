const https = require("https");
const fs = require("fs");

https.get("https://thecommonroomsams.my.canva.site/yunchingwu", (res) => {
  let data = "";
  res.on("data", chunk => data += chunk);
  res.on("end", () => {
    // 1. URLs
    const urls = Array.from(new Set(data.match(/https?:\/\/[^\s"'\\]+/g) || []));
    console.log("=== EXTERNAL URLS ===");
    urls.filter(u => !u.includes("canva") && !u.includes("schema.org") && !u.includes("w3.org") && !u.includes("iframe")).forEach(u => console.log(u));

    // 2. All strings in JSON
    const matches = [];
    const re = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
    let m;
    while ((m = re.exec(data)) !== null) {
      let s = m[1].replace(/\\n/g, "\n").replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
      if (s.length > 5 && !s.startsWith("http") && !s.startsWith("_assets") && !s.startsWith("sha") && !s.includes("webpack") && !s.includes("runtime")) {
        matches.push(s.trim());
      }
    }

    const unique = Array.from(new Set(matches));
    console.log("\n=== FILTERED TEXT ITEMS (" + unique.length + " total) ===");
    unique.forEach(s => {
      if (/[\u4e00-\u9fa5]/.test(s) || /wu|ching|delft|wur|living lab|urban|policy|ai|mobility|thesis|research|skills|project|amsterdam|sensor|wall/i.test(s)) {
        console.log("------------------------");
        console.log(s);
      }
    });
  });
});
