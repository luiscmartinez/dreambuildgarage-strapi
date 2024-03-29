const path = require("path");

module.exports = ({ env }) => {
  return {
    // connection obj = database configuration options passed to Knex.js
    connection: {
      client: "postgres",
      connection: {
        connectionString: env("DATABASE_URL"),
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
      },
      useNullAsDefault: true,
    },
  };
};
