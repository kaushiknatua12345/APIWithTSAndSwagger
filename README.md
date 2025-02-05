# OpenAPI Documentation using Typescript and Express

This project demonstrates how to create an OpenAPI documentation using Typescript and Express, and display it using Swagger UI.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Open terminal and install the below dependencie

 ```sh
npm install

npm install cross-env --save-dev

 npm install -g typescript

 npm install swagger-jsdoc@5.0.1 --save-exact

 npm install swagger-ui-express --save    

```

3. Install Json Server as we are using a dummy Json database (db.json) for this application

```sh
npm i -g json-server 
```

4. Start the json server in new terminal and view using browser (Note: do not close the terminal
during the project execution cycle)

```sh
json-server --watch db.json
```          

## Usage

1. Generate the swagger.json file:

 ```sh
 node swagger.js
 ```

 2. Start the server:

 ```sh
 npm start
 ```

3. Open your browser and navigate to https://kaushiknatua12345.github.io/APIWithTSAndSwagger  to view the Swagger UI.

## API Documentation

Endpoints

GET /users

Retrieve a list of users from {} db.json.

Responses:
200: A list of users.

POST /users

Create a new user.

Request Body:

firstname: The user's name.
lastname: The user's last name.
username: The user's username.
password: The user's password.
email: The user's email.
phone: The user's phone number.
dateOfBirth: The user's date of birth.

Responses:

201: Created.

GET /users/{id}

Retrieve a single user by ID.

Parameters:

id: The user ID.
Responses:

200: A single user.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License


### Additional Steps

```sh
1. **Create a `swagger.js` file**:
   Ensure you have the `swagger.js` file to generate the `swagger.json` file.

   ```javascript
   // filepath: /C:/Users/knatua/Videos/ExpressOpenAPI/TSOpenAPIDocumentation/swagger.js
   const swaggerJsdoc = require('swagger-jsdoc');
   const fs = require('fs');

   const options = {
     definition: {
       openapi: '3.0.0',
       info: {
         title: 'Express API with Swagger',
         version: '1.0.0',
         description: 'This is an OpenAPI application made with Express. It retrieves data from a local db.json file and displays it in a Swagger UI',
         license: {
           name: 'Licensed Under MIT',
           url: 'https://spdx.org/licenses/MIT.html',
         },
       },
     },
     apis: ['./routes/*.js'], // Path to the API docs
   };

   const swaggerSpec = swaggerJsdoc(options);

   fs.writeFileSync('./swagger.json', JSON.stringify(swaggerSpec, null, 2));
```

2. Ensure your routes are properly documented: Make sure your routes in index.js and other route files have the correct Swagger JSDoc comments.

3. Serve the Swagger UI: Modify your app.js to serve the Swagger UI using the generated swagger.json.

```sh

// filepath: /C:/Users/knatua/Videos/ExpressOpenAPI/TSOpenAPIDocumentation/app.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

// Serve the Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Serve the swagger.json file
app.get('/swagger.json', (req, res) => {
  res.sendFile(__dirname + '/swagger.json');
});

// ...existing code...

const port = process.env.PORT || 8178;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

```

4. Commit and push your changes: Commit the new README.md, swagger.js, and any other changes to your repository and push the changes to GitHub.

```sh

git add README.md swagger.js
git commit -m "Add README documentation and swagger.js"
git push origin master

```

