module.exports = {
  "development": {
    "username": "express-mvp-dbuser",
    "password": '123.456',
    "database": "express-mvp-db",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port" : 5432
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  clientId: process.env.CLIENT_ID,
  secret: process.env.LOGIN_SECRET,

  // actual callback
  // callback: 'https://iepmap.herokuapp.com/auth/google/callback'

  //callback for testing
  callback: 'http://localhost:3000/auth/google/callback'
}

