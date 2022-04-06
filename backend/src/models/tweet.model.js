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
                createdAt: { type: 'string', format: 'date-time' }
            }
        };
    }
}

module.exports = Tweet