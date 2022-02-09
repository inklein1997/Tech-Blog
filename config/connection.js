const Sequelize = require('sequelize');
require('dotenv').config({ path: require('find-config')('.env') });

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL, {
//     host: 'l6glqt8gsx37y4hs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     dialect: 'mysql',
//     dialectOptions: {
//       decimalNumbers: true,
//     }
//   })
// } else {
//   sequelize = process.env.JAWSDB_URL
//     ? new Sequelize(process.env.JAWSDB_URL)
//     : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//         host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });
// //   }

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);

module.exports = sequelize