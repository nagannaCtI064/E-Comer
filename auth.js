const express = require('express');
const Mydata = require('./model');
const joi = require('joi');
const bcrypt = require('bcrypt');

const app = express();

// Define the route for the login endpoint
app.post('/login', async (req, res) => {
  try {
    // Validate the request body using Joi
    const { error } = validate(req.body);
    if (error) {
      // If the request body is invalid, send a 400 Bad Request response with the error message
      return res.status(400).send({ message: error.details[0].message });
    }

    // Find the user with the given email address in the database
    const user = await Mydata.findOne({ email: req.body.email_Id });
    if (!user) {
      // If no user is found, send a 401 Unauthorized response
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    // Compare the password in the request body with the hashed password stored in the database
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      // If the passwords don't match, send a 401 Unauthorized response
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    // If the email and password are valid, send a 200 OK response with a success message
    res.status(200).send({ message: 'Login successful!' });
  } catch (error) {
    // If an error occurs, send a 500 Internal Server Error response with the error message
    res.status(500).send({ message: error.message });
  }
});

// Define the Joi schema for validating the request body
const validate = (data) => {
  const schema = joi.object({
    email_id: joi.string().email().required().label('Email'),
    password: joi.string().required().label('Password')
  });
  return schema.validate(data);
};

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
