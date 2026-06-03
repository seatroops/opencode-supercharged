import fs from 'fs';

console.log("\n🚀 OpenCode Supercharged Workspace Initialized Successfully!");
console.log("====================================================");

try {
  const config = JSON.parse(fs.readFileSync('./workspace-config.json', 'utf8'));
  console.log(`📦 Core Project   : ${config.project.toUpperCase()}`);
  console.log(`🛠️  Skills Mapping : ${config.paths.skills}`);
  console.log(`🎨 Design Assets  : ${config.paths.designSystem}`);
  console.log(`🚦 System Status  : ${config.status.toUpperCase()}`);
} catch (error) {
  console.error("❌ Configuration Mapping Error:", error.message);
}
console.log("====================================================\n");
