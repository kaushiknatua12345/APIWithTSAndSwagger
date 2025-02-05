const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const baseURL = 'http://localhost:3000/Users';

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users from db.json.
 *     description: Retrieve a list of users from db.json. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The user ID.
 *                         example: 417d
 *                       firstname:
 *                         type: string
 *                         description: The user's name.
 *                         example: Thirtha
 *                       lastname:
 *                         type: string
 *                         description: The user's last name.
 *                         example: Roy
 *                       username:
 *                         type: string
 *                         description: The user's username.
 *                         example: thirtha.roy
 *                       password:
 *                         type: string
 *                         description: The user's password.
 *                         example: tirtha@123
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: tirtha@hyland.com
 *                       phone:
 *                         type: integer
 *                         description: The user's phone number.
 *                         example: 1234567890
 *                       dateOfBirth:
 *                         type: string
 *                         description: The user's date of birth.
 *                         example: 1998-08-25
 */

router.get('/', function(req, res) {
  const url = baseURL;

  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    res.send({ data });
  })
  .catch((err) => {
    res.send(err);
  });

});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a single user.
 *     description: Retrieve a single user. Can be used to populate a user profile when prototyping or testing an API.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID.
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The user ID.
 *                   example: 417d
 *                 firstname:
 *                   type: string
 *                   description: The user's name.
 *                   example: Thirtha
 *                 lastname:
 *                   type: string
 *                   description: The user's last name.
 *                   example: Roy
 *                 username:
 *                   type: string
 *                   description: The user's username.
 *                   example: thirtha.roy
 *                 password:
 *                   type: string
 *                   description: The user's password.
 *                   example: tirtha@123
 *                 email:
 *                   type: string
 *                   description: The user's email.
 *                   example: tirtha@hyland.com
 *                 phone:
 *                   type: integer
 *                   description: The user's phone number.
 *                   example: 1234567890
 *                 dateOfBirth:
 *                   type: string
 *                   description: The user's date of birth.
 *                   example: 1998-08-25
 */

router.get('/:id', function(req,res) {
  const userID = req.params.id || '';
  const url = `${baseURL}/${userID}`;

  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    res.send({ data });
  })
  .catch((err) => {
    res.send(err);
  });
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a user.
 *     description: Create a user. Can be used to create a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: The user's name.
 *                 example: "string"
 *               lastname:
 *                 type: string
 *                 description: The user's last name.
 *                 example: "string"
 *               username:
 *                 type: string
 *                 description: The user's username.
 *                 example: "string"
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: "string"
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: "string"
 *               phone:
 *                 type: integer
 *                 description: The user's phone number.
 *                 example: 0
 *               dateOfBirth:
 *                 type: string
 *                 description: The user's date of birth.
 *                 example: string
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The user ID.
 *                       example: 517p
 *                     firstname:
 *                       type: string
 *                       description: The user's name.
 *                       example: Emily
 *                     lastname:
 *                       type: string
 *                       description: The user's last name.
 *                       example: Slack
 *                     username:
 *                       type: string
 *                       description: The user's username.
 *                       example: emily.slack
 *                     password:
 *                       type: string
 *                       description: The user's password.
 *                       example: emily@123
 *                     email:
 *                       type: string
 *                       description: The user's email.
 *                       example: emily@hyland.com
 *                     phone:
 *                       type: integer
 *                       description: The user's phone number.
 *                       example: 9874561230
 *                     dateOfBirth:
 *                       type: string
 *                       description: The user's date of birth.
 *                       example: 1990-08-25
 */

router.post('/', function(req, res) {
  const url = baseURL;

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: {
      'Content-type': 'application/json',
    },
  })
  .then((res) => res.json())
  .then((data) => {
    res.send({ data });
  })
  .catch((err) => {
    res.send(err);
  });
});



module.exports = router;
