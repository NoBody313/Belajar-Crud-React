import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db_react", "root", "", {
  host: "localhost",
  dialect: "mysql",
  timezone: "+08:00",
  port: "3307",
});

export default db;
