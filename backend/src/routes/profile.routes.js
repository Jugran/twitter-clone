const { Router } = require('express');

const { fetchProfile, updateProfile, updateFollowing, getFollowers, getFollowing, getProfileSuggestions } = require('../controllers/profile.controller');
const { validate } = require('../middlewares/validateSchema');
const { updateProfileSchema } = require('../schemas/profile.schema');

const profile = Router();

profile.patch('/update', validate(updateProfileSchema), updateProfile);

profile.post('/follow', updateFollowing);

profile.get('/followers', getFollowers);
profile.get('/following', getFollowing);

profile.get('/suggestions', getProfileSuggestions);

profile.get('/:id', fetchProfile);

module.exports = profile;