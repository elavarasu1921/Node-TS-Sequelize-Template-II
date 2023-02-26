import dotenv from "dotenv";
dotenv.config();

const devConfig = {
  DB_NAME: "seconddb",
  DB_USER: "root",
  DB_PASS: "Tamilmagan_1921",
  DB_HOST: "localhost",
  DB_DIALECT: "mysql",
};

const qaConfig = {
  DB_NAME: "qaseconddb",
  DB_USER: "root",
  DB_PASS: "Tamilmagan_1921",
  DB_HOST: "localhost",
  DB_DIALECT: "mysql",
};

const prodConfig = {
  DB_NAME: "prodseconddb",
  DB_USER: "root",
  DB_PASS: "Tamilmagan_1921",
  DB_HOST: "localhost",
  DB_DIALECT: "mysql",
};

const selectedConfig =
  process.env.NODE_ENV === "testing"
    ? qaConfig
    : process.env.NODE_ENV === "production"
    ? prodConfig
    : devConfig;

export { selectedConfig as dbConfig };
