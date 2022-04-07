const bcrypt = require('bcrypt')

const users = [
    {
        id: 1,
        name: 'Bruce Wayne',
        username: 'thebatman',
        password: 'iambatman',
        avatar: 'horse',
        bio: 'Looking for a new Robin, as always. LOL!',
        followers: 0,
        following: 0
    },
    {
        id: 2,
        name: 'The Joker',
        username: 'therealjoker',
        password: 'batmansucks',
        avatar: 'fox',
        bio: "It's not about the money ...",
        followers: 0,
        following: 0
    },
    {
        id: 3,
        name: 'The Robin',
        username: 'secondrobin',
        password: 'batman-pls-help',
        avatar: 'monkey',
        bio: "I'm Batman's new Robin!",
        followers: 0,
        following: 0
    },
    {
        id: 4,
        name: "Nightwing",
        username: 'theoriginalrobin',
        password: 'batman-pls-help',
        avatar: 'bear',
        bio: "Once a robin. Now a struggling freelancer. :')",
        followers: 0,
        following: 0
    }
]

const tweets = [
    {
        text: 'I am Batman!',
        userID: 1
    },
    {
        text: 'I am the Joker!',
        userID: 2
    },
    {
        text: "NA NA Na Na Na .... I'm Batman!",
        userID: 1
    },
    {
        id: 4,
        text: "Alfreeeeed!!!! Get me my Batsuit!",
        userID: 1
    },
    {
        id: 5,
        text: "What do you mean my batsuit shrank in the dryer?????!",
        userID: 1
    },
    {
        id: 8,
        text: "Hello! Bru... I mean Batman speaking.",
        userID: 1
    },
    {
        id: 9,
        text: "Wow I'm finally the new robin!!!",
        userID: 3
    },
    {
        id: 10,
        text: "@secondrobin Not for long... LOL!",
        userID: 4
    },
]

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('tweets').del();
    await knex('users').del();
    await knex('follows').del();

    const prosessed_users = await Promise.all(users.map(async user => {
        const hashed_password = await bcrypt.hash(user.password, 12)
        return {
            ...user,
            password: hashed_password
        }
    }))

    // insert data
    await knex('users').insert(prosessed_users);

    // insert tweets
    await knex('tweets').insert(tweets);

    // insert follows
    await knex('follows').insert([
        { followerID: 1, followingID: 2 },
        { followerID: 2, followingID: 1 },
        { followerID: 3, followingID: 1 },
        { followerID: 3, followingID: 2 },
        { followerID: 3, followingID: 4 },
        { followerID: 4, followingID: 1 },
        { followerID: 4, followingID: 2 },
        { followerID: 4, followingID: 3 },
    ]);


};
