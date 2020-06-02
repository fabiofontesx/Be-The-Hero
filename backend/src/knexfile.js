const path = require('path');
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database', 'db.sqlite')
    },
    migrations: {
      directory: './src/database/migrations/'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


  test: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database', 'test.sqlite')
    },
    
    migrations: {
      directory: './src/database/migrations/'
    },
    useNullAsDefault: true
  },

};
