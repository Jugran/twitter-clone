const { Model } = require('objection');


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
        const User = require('./user.model');

        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                filter: query => query.select('id', 'name', 'username', 'avatar'),
                join: {
                    from: 'tweets.userID',
                    to: 'users.id'
                }
            }
        };
    }
}

module.exports = Tweet