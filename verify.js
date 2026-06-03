import fs from 'fs';
import path from 'path';

console.log("\n🔍 Running OpenCode Workspace Path Diagnostics...");
console.log("====================================================");

const pathsToCheck = {
  "Skills Directory": "./agents/skills",
  "Design Systems": "./design-systems",
  "Configuration Map": "./workspace-config.json"
};

Object.entries(pathsToCheck).forEach(([name, targetPath]) => {
  if (fs.existsSync(targetPath)) {
    const stats = fs.statSync(targetPath);
    const type = stats.isDirectory() ? "Directory" : "File";
    console.log(`✅ ${name.padEnd(20)}: Found (${type})`);
  } else {
    console.log(`❌ ${name.padEnd(20)}: Missing target at ${targetPath}`);
  }
});

console.log("====================================================\n");
