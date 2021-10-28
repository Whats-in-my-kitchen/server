require('dotenv').config();

module.exports = {
   "development":{
    "username": process.env.DB_DEV_USER,
    "password": process.env.DB_DEV_PASSWORD,
    "database": process.env.DB_DEV_DATABASE,
    "host": process.env.DB_DEV_HOST,
    "dialect": "postgres"
   },
   "test":{
    "username": process.env.DB_TEST_USER,
    "password": process.env.DB_TEST_PASSWORD,
    "database": process.env.DB_TEST_DB,
    "host": process.env.DB_TEST_HOST,
    "dialect": "postgresql"
   },
   "production":{
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgresql"
   },
   "port": process.env.PORT
}
