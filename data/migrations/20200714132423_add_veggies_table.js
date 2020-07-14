// Describes what changes we want to make
exports.up = function (knex) {
  return knex.schema.createTable("veggies", (tbl) => {
    //create a primary key that auto-increments
    tbl.increments("id");

    // add a string column (varchar) up to 128 characters
    // hould not allow duplicate values and is required (not NULL)
    tbl.string("name", 128).unique().notNullable();
  });
};

// Describes how to undo the changes
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("veggies");
};
