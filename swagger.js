// filepath: /C:/Users/knatua/Videos/ExpressOpenAPI/TSOpenAPIDocumentation/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const fs = require('fs');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'OpenAPI Documentation using Typescript and Express using SwaggerJsDoc',
      version: '1.0.0',
      description:
        'This is a OpenAPI application made with Express. It retrieves data from local db.json file and displays it in a Swagger UI',
      license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      }    
    },
  },
  apis: ['./routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

fs.writeFileSync('./swagger.json', JSON.stringify(swaggerSpec, null, 2));