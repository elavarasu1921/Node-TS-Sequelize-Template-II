import app from "./src/app";
import dotenv from "dotenv";
import sequelize from "./src/database/config";
import "./src/database/models/associations";

dotenv.config();

const PORT = process.env.PORT || 3000;

(async () => {
  await sequelize.sync({ force: true });
  console.log(sequelize.models);
  console.log("All models were synchronized successfully.");
  app.listen(PORT, () => {
    console.log(`Server listening at: http://localhost:${PORT}`);
  });
})();
