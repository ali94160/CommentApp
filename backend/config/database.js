import { Sequelize } from "sequelize";

const db = new Sequelize({
  host: "localhost",
  dialect: "sqlite",
  storage: "comment.db",
});

export default db;
