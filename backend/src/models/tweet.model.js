const { Model } = require('objection');

const User = require('./user.model');

class Tweet extends Model {
    static get tableName() {
        return 'tweets';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['text', 'userID'],

            properties: {
                id: { type: 'integer' },
                text: { type: 'string', minLength: 1, maxLength: 255 },
                userID: { type: 'integer' },
            }
        };
    }

    static get relationMappings() {
        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'tweets.userID',
                    to: 'users.id'
                }
            }
        };
    }
}

module.exports = Tweet