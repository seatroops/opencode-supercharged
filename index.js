import fs from 'fs';

console.log("\n🚀 OpenCode Supercharged Workspace Initialized Successfully!");
console.log("====================================================");

try {
  const config = JSON.parse(fs.readFileSync('./workspace-config.json', 'utf8'));
  console.log(`📦 Core Project   : ${config.project.toUpperCase()}`);
  console.log(`🛠️  Skills Mapping : ${config.paths.skills}`);
  console.log(`🎨 Design Assets  : ${config.paths.designSystem}`);
  console.log(`🚦 System Status  : ${config.status.toUpperCase()}`);
  
  // Verify native environment variable injection
  console.log(`🌐 Local Runtime  : ${process.env.NODE_ENV || 'production (loaded)'}`);
} catch (error) {
  console.error("❌ Configuration Mapping Error:", error.message);
}
console.log("====================================================\n");
