// Update with your config settings.

module.exports = {
  //Configuration for a development db
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/veggies.db3", //changed the path
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/testing.db3", //changed the path
    },
  },

  //Configuration for a testing db
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  //Configuration for a production db
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
