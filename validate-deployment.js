const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function validateSqlScripts(scripts) {
  return scripts.every(script => script.endsWith('.sql'));
}

try {
  // Read and parse the YAML file
  const filePath = path.join(__dirname, 'deployment.yaml');
  if (!fs.existsSync(filePath)) {
    console.error('deployment.yaml file not found!');
    process.exit(1);
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(fileContents);

  if (!data['database-deployment'] || !data['database-deployment']['scripts-setup']) {
    throw new Error('Invalid structure in deployment.yaml');
  }

  const scriptsSetup = data['database-deployment']['scripts-setup'];
  if (!validateSqlScripts(scriptsSetup)) {
    throw new Error('One or more scripts are not valid SQL files');
  }

  scriptsSetup.forEach(script => {
    const scriptPath = path.join(__dirname, script);
    if (!fs.existsSync(scriptPath)) {
      throw new Error(`${script} does not exist`);
    }
  });

  console.log('Validation passed');
} catch (e) {
  console.error(`Error: ${e.message}`);
  process.exit(1);
}
