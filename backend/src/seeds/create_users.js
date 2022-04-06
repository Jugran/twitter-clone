/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('table_name').del();

    // insert data
    await knex('table_name').insert([
        {
            id: 1,
            name: 'John Doe',
            username: 'johndoe',
            password: 'password',
            avatar: 'cat',
            bio: '',
            followers: 5,
            following: 10
        },
        {
            id: 2,
            name: 'Jane James',
            username: 'janejames',
            password: 'password',
            avatar: 'dog',
            bio: '',
            followers: 123,
            following: 456
        }
    ]);
};
