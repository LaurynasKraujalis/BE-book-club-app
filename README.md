## Scifi Amsterdam bood club server

This is the server and database of the Scifi Amsterdam book club app.

Here is a link to the client side of the book club app: https://github.com/LaurynasKraujalis/FE-book-club-app

# Database

If you would like to take a look into the database configure it in `config/config.json`

The default assumes a postgres database with

- username: postgres
- password: secret

```json
{
  "development": {
    "username": "postgres",
    "password": "secret",
    "database": "book-club-app",
    "host": "localhost",
    "dialect": "postgres",
    "operatorsAliases": "0"
  }
}
```

Create database, run migrations & seed data

`package.json` contains a script for this

npm run initdev

Or run the commands seperately

npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
