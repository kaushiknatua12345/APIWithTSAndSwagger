// filepath: /c:/Users/knatua/Videos/ExpressOpenAPI/TSOpenAPIDocumentation/generate-swagger-ui.js
const fs = require('fs');
const path = require('path');
const swaggerUiDist = require('swagger-ui-dist').absolutePath();

const docsDir = path.join(__dirname, 'docs');
const swaggerJsonPath = path.join(__dirname, 'swagger.json');

// Ensure the docs directory exists
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir);
}

// Copy swagger-ui-dist files to docs directory
fs.readdirSync(swaggerUiDist).forEach(file => {
  const srcPath = path.join(swaggerUiDist, file);
  const destPath = path.join(docsDir, file);
  fs.copyFileSync(srcPath, destPath);
});

// Copy swagger.json to docs directory
fs.copyFileSync(swaggerJsonPath, path.join(docsDir, 'swagger.json'));

// Modify index.html to use the swagger.json file
const indexPath = path.join(docsDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');
indexContent = indexContent.replace('https://petstore.swagger.io/v2/swagger.json', 'https://kaushiknatua12345.github.io/APIWithTSAndSwagger/swagger.json');
fs.writeFileSync(indexPath, indexContent);

console.log('Swagger UI generated in docs directory');