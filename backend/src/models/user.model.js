const { Model } = require('objection');
const Tweet = require('./tweet.model');

const Password = require('objection-password')();


class User extends Password(Model) {
    static get tableName() {
        return 'users';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['username', 'email', 'password'],

            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 255 },
                username: { type: 'string', minLength: 1, maxLength: 255 },
                password: { type: 'string', minLength: 1, maxLength: 255 },
                avatar: { type: 'string', minLength: 1, maxLength: 30 },
                bio: { type: 'string', minLength: 1, maxLength: 255 },
                followers: { type: 'integer' },
                following: { type: 'integer' },
                createdAt: { type: 'date' },
                updatedAt: { type: 'date' }
            }
        };
    }

    static get relationMappings() {
        return {
            tweets: {
                relation: Model.HasManyRelation,
                modelClass: Tweet,
                join: {
                    from: 'users.id',
                    to: 'tweets.userID'
                }
            }
        };
    }
}


module.exports = User;