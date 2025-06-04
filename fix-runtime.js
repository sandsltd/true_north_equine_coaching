import fs from 'fs';
import path from 'path';

// Fix the invalid runtime format in Vercel function configs
function fixRuntimeConfig() {
  const functionsDir = '.vercel/output/functions';
  
  if (!fs.existsSync(functionsDir)) {
    console.log('No Vercel functions directory found, skipping runtime fix');
    return;
  }

  // Find all .vc-config.json files
  function findConfigFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        files.push(...findConfigFiles(fullPath));
      } else if (item === '.vc-config.json') {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  const configFiles = findConfigFiles(functionsDir);
  
  for (const configFile of configFiles) {
    try {
      const config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
      
      // Fix the runtime format - use 22.x to match our package.json engines
      if (config.runtime && config.runtime.startsWith('nodejs')) {
        const oldRuntime = config.runtime;
        config.runtime = '22.x';
        
        fs.writeFileSync(configFile, JSON.stringify(config, null, '\t'));
        console.log(`✅ Fixed runtime in ${configFile}: ${oldRuntime} → 22.x`);
      }
    } catch (error) {
      console.error(`❌ Error fixing runtime config in ${configFile}:`, error.message);
    }
  }
}

fixRuntimeConfig(); 