const { Model } = require('objection');

const Password = require('objection-password')();

class User extends Password(Model) {
    static get tableName() {
        return 'users';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['username', 'password'],

            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 255 },
                username: { type: 'string', minLength: 1, maxLength: 255 },
                password: { type: 'string', minLength: 1, maxLength: 255 },
                avatar: { type: 'string', minLength: 1, maxLength: 30 },
                bio: { type: 'string', minLength: 1, maxLength: 255 },
                followers: { type: 'integer' },
                following: { type: 'integer' },
            }
        };
    }

    static get relationMappings() {
        const Tweet = require('./tweet.model');

        return {
            tweets: {
                relation: Model.HasManyRelation,
                modelClass: Tweet,
                filter: query => query.select('id', 'text', 'createdAt'),
                join: {
                    from: 'users.id',
                    to: 'tweets.userID'
                }
            },
            following: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                filter: query => query.select('id', 'name', 'username', 'avatar'),
                join: {
                    from: 'users.id',
                    through: {
                        from: 'follows.followerID',
                        to: 'follows.followingID'
                    },
                    to: 'users.id'
                }
            },
            followers: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                filter: query => query.select('id', 'name', 'username', 'avatar'),
                join: {
                    from: 'users.id',
                    through: {
                        from: 'follows.followingID',
                        to: 'follows.followerID'
                    },
                    to: 'users.id'
                }
            }
        };
    }
}


module.exports = User;