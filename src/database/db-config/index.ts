import { Sequelize } from "sequelize";
import { dbConfig } from "./db-config";

const sequelize = new Sequelize(
  dbConfig.DB_NAME,
  dbConfig.DB_USER,
  dbConfig.DB_PASS,
  {
    dialect: "mysql",
    host: dbConfig.DB_HOST,
  }
);

export default sequelize;
