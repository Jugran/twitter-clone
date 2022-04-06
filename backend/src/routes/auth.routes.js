const { Router } = require('express');

const { login, signUp } = require('../controllers/user.controller');
const { validate } = require('../middlewares/validateSchema');
const { authDetails } = require('../schemas/auth.schema')

const auth = Router();

auth.post('/login', validate(authDetails), login);
auth.post('/signup', validate(authDetails), signUp);

module.exports = auth;