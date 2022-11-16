const app = require("./app");
const models = require("./db/models");
const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    await models.sequelize.sync();
    console.info(
      "⚡️[database]: Database connection has been established successfully."
    );

    app.listen(PORT, () => {
      console.info(
        `⚡️[server]: Server is running at http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
