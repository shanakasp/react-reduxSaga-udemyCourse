mkdir my-express-app
cd my-express-app
npm init -y

npm install express sequelize sequelize-cli pg pg-hstore bcryptjs jsonwebtoken
npm install --save-dev nodemon


npx sequelize-cli init

npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string,roleId:integer

npx sequelize-cli model:generate --name Role --attributes name:string

Create models

npx sequelize-cli db:migrate

nodemon server.js

when data needs to send to db (Such as user roles, default admins etc)
create that in Create a file seeders/20230614-create-roles.js:

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};


npx sequelize-cli db:seed:all
