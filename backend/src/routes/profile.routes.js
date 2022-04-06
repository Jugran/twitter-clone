const { Router } = require('express');

const { fetchProfile, updateProfile } = require('../controllers/user.controller');
const { validate } = require('../middlewares/validateSchema');

const profile = Router();

profile.patch('/update', updateProfile);
profile.get('/:id', fetchProfile);

module.exports = profile;