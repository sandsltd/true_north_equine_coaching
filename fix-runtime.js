import fs from 'fs';
import path from 'path';

// Fix the invalid runtime format in Vercel function configs
function fixRuntimeConfig() {
  const functionsDir = '.vercel/output/functions';
  
  if (!fs.existsSync(functionsDir)) {
    console.log('No Vercel functions directory found, skipping runtime fix');
    return;
  }

  // Read the Node.js version from package.json
  let targetRuntime = '20.x'; // Default fallback
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    if (packageJson.engines && packageJson.engines.node) {
      targetRuntime = packageJson.engines.node;
    }
    console.log(`📋 Using Node.js version from package.json: ${targetRuntime}`);
  } catch (error) {
    console.log(`⚠️  Could not read package.json, using default: ${targetRuntime}`);
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
      
      // Fix the runtime format - remove nodejs prefix and use package.json version
      if (config.runtime && config.runtime.startsWith('nodejs')) {
        const oldRuntime = config.runtime;
        config.runtime = targetRuntime;
        
        fs.writeFileSync(configFile, JSON.stringify(config, null, '\t'));
        console.log(`✅ Fixed runtime in ${configFile}: ${oldRuntime} → ${targetRuntime}`);
      }
    } catch (error) {
      console.error(`❌ Error fixing runtime config in ${configFile}:`, error.message);
    }
  }
}

fixRuntimeConfig(); 