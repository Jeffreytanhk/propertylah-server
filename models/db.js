const { Sequelize } = require("sequelize");

// DB connection
const sequelize = new Sequelize(
  process.env.NODE_ENV === "development"
    ? process.env.DEV_DB_NAME
    : process.env.PROD_DB_NAME,
  process.env.NODE_ENV === "development"
    ? process.env.DEV_DB_USERNAME
    : process.env.PROD_DB_USERNAME,
  "ZwSSNA2Mo#wyXY",
  {
    host: "localhost",
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });

// const sequelize = new Sequelize(
//   process.env.NODE_ENV === "development"
//     ? process.env.DEV_DB_NAME
//     : process.env.PROD_DB_NAME,
//   process.env.NODE_ENV === "development"
//     ? process.env.DEV_DB_USERNAME
//     : process.env.PROD_DB_USERNAME,
//   "postgres",
//   {
//     host: "localhost",
//     dialect: "postgres",
//     logging: false,
//   }
// );

// test connection function
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connection success!");
  } catch (error) {
    console.log("DB Connection failed", error);
  }
};

// exports - export the connection, test fn
module.exports = {
  sequelize,
  testConnection,
};
