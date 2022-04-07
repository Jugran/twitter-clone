/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    
    await knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name');
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('avatar').notNullable().defaultTo('panda');
        table.string('bio');
        table.integer('followers').notNullable().defaultTo(0);
        table.integer('following').notNullable().defaultTo(0);
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());

        table.unique('username');
    });

    await knex.schema.createTable('tweets', table => {
        table.increments('id').primary();
        table.string('text').notNullable();
        table.integer('userID').notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
    });

    await knex.schema.createTable('follows', table => {
        table.integer('followerID').notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.integer('followingID').notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.primary(['followerID', 'followingID']);
    });


};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('follows');
    await knex.schema.dropTableIfExists('tweets');
    await knex.schema.dropTableIfExists('users');
};
