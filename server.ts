import app from "./src/app";
import dotenv from "dotenv";
import sequelize from "./src/database/db-config";
import "./src/database/models/associations";

dotenv.config();

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync({ force: true });
    // console.log(sequelize.models);
    app.listen(PORT, () => {
      console.log(`Server listening at: http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("Database not connected");
    throw err;
  }
})();
